import { impactNormalizer } from "@ribon.io/shared/lib";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import * as S from "../styles";

export function useFormattedImpact() {
  const { t: normalizerTranslation } = useTranslation("translation", {
    keyPrefix: "impactNormalizer",
  });

  const highlightedImpact = (normalizedImpact: any) => (
    <>
      {normalizedImpact.map((slice: any, index: any) => (
        <Fragment key={slice}>
          {index % 2 === 0 ? <b>{slice}</b> : slice}{" "}
        </Fragment>
      ))}
    </>
  );

  const unitImpact = (normalizedImpactUnit: any, unit: string) => (
    <>
      {unit !== "days_months_and_years" && (
        <S.MainTextNumber>{normalizedImpactUnit[0]}</S.MainTextNumber>
      )}
      {unit === "days_months_and_years" && normalizedImpactUnit[0]}

      {normalizedImpactUnit.length > 1 && (
        <p>
          <b>{normalizedImpactUnit[normalizedImpactUnit.length - 1]}</b>
        </p>
      )}
    </>
  );

  function formattedImpactUnit(nonProfit?: any, impact?: number) {
    if (!nonProfit) return "";

    const normalizedImpact = impactNormalizer(
      nonProfit,
      impact || 0,
      normalizerTranslation,
    );
    const unit = normalizedImpact[0].toString();

    let first;

    const words = unit.split(" ");
    if (words.length <= 3) {
      return unit;
    } else {
      first = `${words[0]} ${words[1]}`;
    }

    return unitImpact(
      [first, unit.replace(first, "")],
      nonProfit?.nonProfitImpacts[nonProfit.nonProfitImpacts.length - 1]
        ?.measurementUnit,
    );
  }

  function formattedImpactText(nonProfit?: any, impact?: number) {
    if (!nonProfit) return "";

    const impacts = nonProfit?.nonProfitImpacts || [];
    const nonProfitsImpactsLength = impacts.length;
    const lastImpact = impacts[nonProfitsImpactsLength - 1];

    if (lastImpact.donorRecipient) {
      const normalizedImpact = impactNormalizer(
        nonProfit,
        impact || 0,
        normalizerTranslation,
      );

      delete normalizedImpact[0];

      return highlightedImpact(normalizedImpact);
    }

    return `${nonProfit?.impactDescription}`;
  }
  return { formattedImpactText, formattedImpactUnit };
}
export default useFormattedImpact;
