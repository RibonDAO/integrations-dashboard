import IconAndText from "components/atomics/IconAndText";
import RibonIconSquared from "assets/icons/ribon-icon-squared.svg";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

function CommunityParticipationPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "communityParticipationPage",
  });

  return (
    <S.Container>
      <S.InnerContainer>
        <IconAndText icon={RibonIconSquared} text="Dinheiro na nota" />
        <S.Title>{t("title")}</S.Title>
        <S.Divider />
      </S.InnerContainer>
    </S.Container>
  );
}
export default CommunityParticipationPage;
