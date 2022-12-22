import { useTranslation } from "react-i18next";
import RibonIcon from "assets/icons/ribon-icon.svg";
import * as S from "./styles";

function ErrorPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "errorPage",
  });

  const { searchParams } = new URL(window.location.href);

  const error = t(`errors.${searchParams.get("code") || "generic"}`);

  return (
    <S.Container>
      <img src={RibonIcon} alt="Ribon" />
      <S.Title>{t("title")}</S.Title>
      <S.ErrorText>{error}</S.ErrorText>
    </S.Container>
  );
}
export default ErrorPage;
