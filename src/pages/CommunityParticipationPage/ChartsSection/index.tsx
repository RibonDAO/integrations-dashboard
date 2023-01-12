import React from "react";
import LinearPeriodsComparsion from "components/moleculars/charts/LinearPeriodsComparsion";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

type Props = {
  integrationImpact: any;
  daysOffset: number;
};

function ChartsSection({ integrationImpact, daysOffset }: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "chartsSection",
  });

  return (
    <S.Container>
      <S.ChartContainer>
        {integrationImpact && (
          <LinearPeriodsComparsion
            title={t("donorsInThePeriod")}
            currentPeriodData={integrationImpact?.donorsSplittedIntoIntervals?.map(
              (item: any) => item?.count || 0,
            )}
            previousPeriodData={integrationImpact?.previousDonorsSplittedIntoIntervals?.map(
              (item: any) => item?.count || 0,
            )}
            labels={integrationImpact?.donorsSplittedIntoIntervals?.map(
              (item: any) => item?.initialDate.substring(0, 5) || "",
            )}
            daysOffset={daysOffset}
          />
        )}
      </S.ChartContainer>
      <S.ChartContainer>
        {integrationImpact && (
          <LinearPeriodsComparsion
            title={t("donationsInThePeriod")}
            currentPeriodData={integrationImpact?.donationsSplittedIntoIntervals?.map(
              (item: any) => item?.count || 0,
            )}
            previousPeriodData={integrationImpact?.previousDonationsSplittedIntoIntervals?.map(
              (item: any) => item?.count || 0,
            )}
            labels={integrationImpact?.donationsSplittedIntoIntervals?.map(
              (item: any) => item?.initialDate.substring(0, 5) || "",
            )}
            daysOffset={daysOffset}
          />
        )}
      </S.ChartContainer>
    </S.Container>
  );
}
export default ChartsSection;
