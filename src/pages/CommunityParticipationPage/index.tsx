import IconAndText from "components/atomics/IconAndText";
import { useEffect, useState } from "react";
import RibonIconSquared from "assets/icons/ribon-icon-squared.svg";
import RangeDatePicker from "components/moleculars/RangeDatePicker";
import { useTranslation } from "react-i18next";
import {
  useIntegrationImpact,
  useIntegration,
} from "@ribon.io/shared/dist/hooks";
import * as S from "./styles";

function CommunityParticipationPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "communityParticipationPage",
  });
  const [endDate, setEndDate] = useState<Date>(new Date());

  const previousDate = (date: Date, days: number) =>
    new Date(new Date(date).setDate(new Date(date).getDate() - days));

  const [startDate, setStartDate] = useState<Date>(previousDate(endDate, 7));
  const integrationId = new URL(window.location.href).searchParams.get(
    "integration_id",
  );
  const { integration } = useIntegration(integrationId);
  const { integrationImpact, refetch } = useIntegrationImpact(
    integrationId,
    `${
      startDate.getMonth() + 1
    }-${startDate.getDate()}-${startDate.getFullYear()}`,
    `${endDate.getMonth() + 1}-${endDate.getDate()}-${endDate.getFullYear()}`,
  );

  useEffect(() => {
    refetch();
  }, [startDate, endDate]);

  return (
    <S.Container>
      <S.InnerContainer>
        <IconAndText icon={RibonIconSquared} text={integration?.name} />
        <S.Title>{t("title")}</S.Title>
        <S.Divider />

        <RangeDatePicker
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={setStartDate}
          handleEndDateChange={setEndDate}
        />

        <S.ContentContainer>
          <S.ContentDiv>
            <S.ParticipatingDonorsText>
              {integrationImpact?.totalDonors}
            </S.ParticipatingDonorsText>
            <S.ParticipatingDonorsSubtext>
              {t("participatingDonors")}
            </S.ParticipatingDonorsSubtext>
          </S.ContentDiv>

          <S.ContentDiv>
            <S.ParticipatingDonorsText>
              {integrationImpact?.totalDonations}
            </S.ParticipatingDonorsText>
            <S.ParticipatingDonorsSubtext>
              {t("donationsMade")}
            </S.ParticipatingDonorsSubtext>
          </S.ContentDiv>
        </S.ContentContainer>

        <S.Title>{t("impactPerProject")}</S.Title>
        {integrationImpact?.impactPerNonProfit.map(
          ({ impact, nonProfit }: any) => (
            <div>
              <p>{nonProfit.name}</p>
              <p>{impact}</p>
              <p>{nonProfit.impactDescription}</p>
            </div>
          ),
        )}
      </S.InnerContainer>
    </S.Container>
  );
}
export default CommunityParticipationPage;
