import IconAndText from "components/atomics/IconAndText";
import { useEffect, useState } from "react";
import RibonIconSquared from "assets/icons/ribon-icon-squared.svg";
import RangeDatePicker from "components/moleculars/RangeDatePicker";
import { useTranslation } from "react-i18next";
import { useIntegrationImpact, useIntegration } from "@ribon.io/shared/hooks";
import { useNavigate } from "react-router-dom";
import { daysBetween, formatDate, previousDate } from "lib/dateFormatter";
import ScrollIndicator from "components/atomics/ScrollIndicator";
import { updateLocationSearch } from "lib/locationSearch";
import { formatTrend } from "lib/textFormatter";
import PlusMinus from "components/atomics/PlusMinus";
import ProjectImpactSectionPage from "./ProjectImpactSectionPage";
import * as S from "./styles";

function CommunityParticipationPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "communityParticipationPage",
  });
  const navigate = useNavigate();

  const { searchParams } = new URL(window.location.href);
  const integrationId = searchParams.get("integration_id");

  if (
    !integrationId ||
    integrationId === "null" ||
    integrationId === "undefined"
  ) {
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

  const averagePerDay = (value: number) => {
    const days = daysBetween(startDate, endDate);
    const result = Math.round(Number(value) / days);

    return Number.isNaN(result) ? "-" : result;
  };

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
            <S.InnerContentDiv>
              <S.ParticipatingDonorsText>
                {integrationImpact?.totalDonors || 0}
              </S.ParticipatingDonorsText>
              <S.ParticipatingDonorsSubtext>
                {t("participatingDonors")}
              </S.ParticipatingDonorsSubtext>
              <S.ParticipatingDonorsTrendText>
                <PlusMinus value={integrationImpact?.totalDonorsTrend} />{" "}
                {formatTrend(integrationImpact?.totalDonorsTrend)}
              </S.ParticipatingDonorsTrendText>
              <S.ParticipatingDonorsTrendSubtext>
                {t("participatingDonorsTrend", {
                  value: daysBetween(startDate, endDate),
                })}
              </S.ParticipatingDonorsTrendSubtext>
            </S.InnerContentDiv>
          </S.ContentDiv>

          <S.ContentDiv>
            <S.InnerContentDiv>
              <S.ParticipatingDonorsText>
                {integrationImpact?.totalDonations || 0}
              </S.ParticipatingDonorsText>
              <S.ParticipatingDonorsSubtext>
                {t("donationsMade")}
              </S.ParticipatingDonorsSubtext>
              <S.ParticipatingDonorsTrendText>
                <PlusMinus value={integrationImpact?.totalDonationsTrend} />{" "}
                {formatTrend(integrationImpact?.totalDonationsTrend)}
              </S.ParticipatingDonorsTrendText>
              <S.ParticipatingDonorsTrendSubtext>
                {t("participatingDonorsTrend", {
                  value: daysBetween(startDate, endDate),
                })}
              </S.ParticipatingDonorsTrendSubtext>
            </S.InnerContentDiv>
            <S.InnerContentDiv>
              <S.DonorsPerDayText>
                {integrationImpact
                  ? averagePerDay(integrationImpact.totalDonors)
                  : "-"}
              </S.DonorsPerDayText>
              <S.DonorsPerDaySubtext>{t("donorsPerDay")}</S.DonorsPerDaySubtext>
              <S.DonationsPerDayText>
                {integrationImpact
                  ? averagePerDay(integrationImpact.totalDonations)
                  : "-"}
              </S.DonationsPerDayText>
              <S.DonationsPerDaySubtext>
                {t("donationsPerDay")}
              </S.DonationsPerDaySubtext>
            </S.InnerContentDiv>
          </S.ContentDiv>
        </S.ContentContainer>

        <S.GrayContainer>
          {!isLoading && (
            <ProjectImpactSectionPage integrationImpact={integrationImpact} />
          )}
        </S.GrayContainer>
      </S.InnerContainer>
      <ScrollIndicator />
    </S.Container>
  );
}
export default CommunityParticipationPage;
