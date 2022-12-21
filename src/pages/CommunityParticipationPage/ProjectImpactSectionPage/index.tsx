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

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Title>{t("title")}</S.Title>
        <GroupButtons
          elements={filterOptions}
          nameExtractor={(element) => element.text}
        />
        <S.ImpactContainer>
          {integrationImpact?.impactPerNonProfit.map(
            ({ impact, nonProfit }: any) => (
              <div key={nonProfit.id}>
                <CardCroppedImage
                  image={nonProfit.backgroundImage}
                  secondaryText={nonProfit.impactDescription}
                  mainText={impact}
                />
              </div>
            ),
          )}
        </S.ImpactContainer>
      </S.InnerContainer>
    </S.Container>
  );
}
export default ProjectImpactSectionPage;
