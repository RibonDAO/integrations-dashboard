import React from "react";
import { useTranslation } from "react-i18next";
import { formatTrend } from "lib/textFormatter";
import PlusMinus from "components/atomics/PlusMinus";
import { daysBetween } from "lib/dateFormatter";
import * as S from "./styles";

type Props = {
  integrationImpact: any;
  startDate: Date;
  endDate: Date;
};

function NumbersSection({
  integrationImpact,
  startDate,
  endDate,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "communityParticipationPage",
  });

  const averagePerDay = (value: number) => {
    const days = daysBetween(startDate, endDate);
    const result = Math.round(Number(value) / days);

    return Number.isNaN(result) ? "-" : result;
  };

  const averagePeriod = (value: number, total: number) => {
    const result = Math.round((Number(value) * 100) / total);

    return Number.isNaN(result) ? "-" : result;
  };

  return (
    <S.Container>
      <S.OuterColumn>
        <S.InnerColumn>
          <S.Block>
            <S.BigNumber>{integrationImpact?.totalDonors || 0}</S.BigNumber>
            <S.BigSubtitle>{t("participatingDonors")}</S.BigSubtitle>
          </S.Block>
          <S.Block>
            <S.Percentage>
              <PlusMinus value={integrationImpact?.totalDonorsTrend} />{" "}
              {formatTrend(integrationImpact?.totalDonorsTrend)}
            </S.Percentage>
            <S.SmallSubtitle>
              {t("participatingDonorsTrend", {
                value: daysBetween(startDate, endDate),
              })}
            </S.SmallSubtitle>
          </S.Block>
        </S.InnerColumn>

        <S.InnerColumn>
          <S.Block>
            <S.SmallNumber>
              {integrationImpact ? integrationImpact.totalNewDonors : "-"}{" "}
            </S.SmallNumber>
            <S.SmallSubtitle>
              {t("newDonors")}
              {` (${averagePeriod(
                integrationImpact?.totalNewDonors,
                integrationImpact?.totalDonors,
              )}%)`}
            </S.SmallSubtitle>
          </S.Block>
          <S.Block>
            <S.SmallNumber>
              {integrationImpact
                ? integrationImpact?.totalDonorsRecurrent
                : "-"}
            </S.SmallNumber>
            <S.SmallSubtitle>
              {t("returningDonors")}
              {` (${averagePeriod(
                integrationImpact?.totalDonorsRecurrent,
                integrationImpact?.totalDonors,
              )}%)`}
            </S.SmallSubtitle>
          </S.Block>
        </S.InnerColumn>
      </S.OuterColumn>

      <S.OuterColumn>
        <S.InnerColumn>
          <S.Block>
            <S.BigNumber>{integrationImpact?.totalDonations || 0}</S.BigNumber>
            <S.BigSubtitle>{t("donationsMade")}</S.BigSubtitle>
          </S.Block>
          <S.Block>
            <S.Percentage>
              <PlusMinus value={integrationImpact?.totalDonationsTrend} />{" "}
              {formatTrend(integrationImpact?.totalDonationsTrend)}
            </S.Percentage>
            <S.SmallSubtitle>
              {t("participatingDonorsTrend", {
                value: daysBetween(startDate, endDate),
              })}
            </S.SmallSubtitle>
          </S.Block>
        </S.InnerColumn>

        <S.InnerColumn>
          <S.Block>
            <S.SmallNumber>
              {integrationImpact
                ? averagePerDay(integrationImpact?.totalDonors)
                : "-"}
            </S.SmallNumber>
            <S.SmallSubtitle>{t("donorsPerDay")}</S.SmallSubtitle>
          </S.Block>
          <S.Block>
            <S.SmallNumber>
              {integrationImpact
                ? averagePerDay(integrationImpact.totalDonations)
                : "-"}
            </S.SmallNumber>
            <S.SmallSubtitle>{t("donationsPerDay")}</S.SmallSubtitle>
          </S.Block>
        </S.InnerColumn>
      </S.OuterColumn>
    </S.Container>
  );
}
export default NumbersSection;
