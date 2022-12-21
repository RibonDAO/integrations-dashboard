import IconAndText from "components/atomics/IconAndText";
import { useEffect, useState } from "react";
import RibonIconSquared from "assets/icons/ribon-icon-squared.svg";
import RangeDatePicker from "components/moleculars/RangeDatePicker";
import { useTranslation } from "react-i18next";
import {
  useIntegrationImpact,
  useIntegration,
} from "@ribon.io/shared/dist/hooks";
import { formatDate, previousDate } from "lib/dateFormatter";
import { updateLocationSearch } from "lib/locationSearch";
import ProjectImpactSectionPage from "./ProjectImpactSectionPage";
import * as S from "./styles";

function CommunityParticipationPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "communityParticipationPage",
  });
  const { searchParams } = new URL(window.location.href);
  const integrationId = searchParams.get("integration_id");
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
  const { integrationImpact, refetch } = useIntegrationImpact(
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

        <S.GrayContainer>
          <ProjectImpactSectionPage integrationImpact={integrationImpact} />
        </S.GrayContainer>
      </S.InnerContainer>
    </S.Container>
  );
}
export default CommunityParticipationPage;
