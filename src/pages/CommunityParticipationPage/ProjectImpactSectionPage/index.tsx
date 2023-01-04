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

  const tabOptions = [
    {
      data: integrationImpact?.impactPerNonProfit,
      parse: (item: any) => ({
        description: item?.nonProfit?.impactDescription,
        value: item?.impact || 0,
      }),
    },
    {
      data: integrationImpact?.donorsPerNonProfit,
      parse: (item: any) => ({
        description: t("participatingDonors"),
        value: item?.donors || 0,
      }),
    },
    {
      data: integrationImpact?.donationsPerNonProfit,
      parse: (item: any) => ({
        description: t("donationsMade"),
        value: item?.donations || 0,
      }),
    },
  ];

  const currentTab = () => tabOptions[selectedButtonIndex];

  const handleButtonChange = (element: any, index: number) => {
    setSelectedButtonIndex(index);
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
        {currentTab().data.map((item: any) => (
          <div key={item.nonProfit.id}>
            <CardCroppedImage
              image={item.nonProfit.backgroundImage}
              internalImage={item.nonProfit.logo}
              mainText={currentTab().parse(item).value}
              secondaryText={currentTab().parse(item).description}
            />
          </div>
        ))}
      </S.ImpactContainer>
    </S.Container>
  );
}
export default ProjectImpactSectionPage;
