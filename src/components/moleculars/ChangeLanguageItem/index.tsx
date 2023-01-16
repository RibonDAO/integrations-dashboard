import ButtonSwitch from "components/atomics/buttons/ButtonSwitch";
import { useLanguage } from "hooks/useLanguage";
import { Languages } from "@ribon.io/shared/types";
import * as S from "./styles";

function ChangeLanguageItem(): JSX.Element {
  const { currentLang, handleSwitchLanguage } = useLanguage();

  function handleSwitch() {
    handleSwitchLanguage();
  }

  return (
    <S.Container>
      <ButtonSwitch
        leftText="PT"
        rightText="EN"
        onSwitch={() => handleSwitch()}
        initialCheckState={currentLang === Languages.EN}
      />
    </S.Container>
  );
}

export default ChangeLanguageItem;
