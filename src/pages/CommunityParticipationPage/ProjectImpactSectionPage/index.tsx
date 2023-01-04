import React, { useState } from "react";
import CardCroppedImage from "components/moleculars/cards/CardCroppedImage";
import GroupButtons from "components/sections/GroupButtons";
import ImpactOn from "assets/icons/check-spark-dark-green.svg";
import ImpactOff from "assets/icons/check-spark-gray.svg";
import DonationsOn from "assets/icons/donation-dark-green.svg";
import DonationsOff from "assets/icons/donation-gray.svg";
import DonorsOn from "assets/icons/group-dark-green.svg";
import DonorsOff from "assets/icons/group-gray.svg";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

type Props = {
  integrationImpact: any;
};

function ProjectImpactSectionPage({ integrationImpact }: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "impactPerProjectSection",
  });

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const filterOptions = [
    {
      text: t("impactButton"),
      onClick: () => {},
      iconOn: ImpactOn,
      iconOff: ImpactOff,
    },
    {
      text: t("donorsButton"),
      onClick: () => {},
      iconOn: DonorsOn,
      iconOff: DonorsOff,
    },
    {
      text: t("donationsButton"),
      onClick: () => {},
      iconOn: DonationsOn,
      iconOff: DonationsOff,
    },
  ];

  const handleButtonChange = (element: any, index: number) => {
    setSelectedButtonIndex(index);
  };

  const currentTabData = () => {
    switch (selectedButtonIndex) {
      case 0:
        return {
          object: integrationImpact?.impactPerNonProfit,
          currentItem: (item: any) => ({
            description: item?.nonProfit?.impactDescription,
            value: item?.impact || 0,
          }),
        };
      case 1:
        return {
          object: integrationImpact?.donorsPerNonProfit,
          currentItem: (item: any) => ({
            description: t("participatingDonors"),
            value: item?.donors || 0,
          }),
        };
      default:
        return {
          object: integrationImpact?.donationsPerNonProfit,
          currentItem: (item: any) => ({
            description: t("donationsMade"),
            value: item?.donations || 0,
          }),
        };
    }
  };

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <GroupButtons
        elements={filterOptions}
        onChange={handleButtonChange}
        indexSelected={selectedButtonIndex}
        nameExtractor={(element) => element.text}
      />
      <S.ImpactContainer>
        {currentTabData()?.object.map((item: any) => (
          <div key={item.nonProfit.id}>
            <CardCroppedImage
              image={item.nonProfit.backgroundImage}
              internalImage={item.nonProfit.logo}
              mainText={currentTabData().currentItem(item).value}
              secondaryText={currentTabData().currentItem(item).description}
            />
          </div>
        ))}
      </S.ImpactContainer>
    </S.Container>
  );
}
export default ProjectImpactSectionPage;
