import IconAndText from "components/atomics/IconAndText";
import { useEffect, useState } from "react";
import RibonIconSquared from "assets/icons/ribon-icon-squared.svg";
import RangeDatePicker from "components/moleculars/RangeDatePicker";
import { useTranslation } from "react-i18next";
import {
  useIntegrationImpact,
  useIntegration,
} from "@ribon.io/shared/dist/hooks";
import CardCroppedImage from "components/moleculars/cards/CardCroppedImage";
import { formatDate, previousDate } from "lib/dateFormatter";
import { updateLocationSearch } from "lib/locationSearch";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

function CommunityParticipationPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "communityParticipationPage",
  });
  const navigate = useNavigate();

  const { searchParams } = new URL(window.location.href);
  const integrationId = searchParams.get("integration_id");

  if (!integrationId) {
    navigate("/error?code=missing_integration_id_param");
  }

  const initialEndDate = () => {
    const ed = searchParams.get("end_date");
    return ed !== null ? new Date(`${ed}T00:00`) : new Date();
  };
  const [endDate, setEndDate] = useState<Date>(initialEndDate());

  const initialStartDate = () => {
    const sd = searchParams.get("start_date");
    return sd !== null ? new Date(`${sd}T00:00`) : previousDate(endDate, 7);
  };
  const [startDate, setStartDate] = useState<Date>(initialStartDate());
  const { integration } = useIntegration(integrationId);
  const { integrationImpact, refetch, isLoading } = useIntegrationImpact(
    integrationId,
    formatDate(startDate),
    formatDate(endDate),
  );

  useEffect(() => {
    updateLocationSearch("start_date", formatDate(startDate));
    updateLocationSearch("end_date", formatDate(endDate));
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
          customDateFormat={t("datePickerFormat")}
        />

        <S.ContentContainer>
          <S.ContentDiv>
            <S.ParticipatingDonorsText>
              {integrationImpact?.totalDonors || 0}
            </S.ParticipatingDonorsText>
            <S.ParticipatingDonorsSubtext>
              {t("participatingDonors")}
            </S.ParticipatingDonorsSubtext>
          </S.ContentDiv>

          <S.ContentDiv>
            <S.ParticipatingDonorsText>
              {integrationImpact?.totalDonations || 0}
            </S.ParticipatingDonorsText>
            <S.ParticipatingDonorsSubtext>
              {t("donationsMade")}
            </S.ParticipatingDonorsSubtext>
          </S.ContentDiv>
        </S.ContentContainer>

        <S.GrayContainer>
          <S.TitleResults>{t("impactPerProject")}</S.TitleResults>
          <S.ImpactContainer>
            {!isLoading &&
              integrationImpact?.impactPerNonProfit.map(
                ({ impact, nonProfit }: any) => (
                  <div key={nonProfit.id}>
                    <CardCroppedImage
                      image={nonProfit.backgroundImage}
                      secondaryText={nonProfit.impactDescription}
                      mainText={impact}
                      internalImage={nonProfit.logo}
                    />
                  </div>
                ),
              )}
          </S.ImpactContainer>
        </S.GrayContainer>
      </S.InnerContainer>
    </S.Container>
  );
}
export default CommunityParticipationPage;
