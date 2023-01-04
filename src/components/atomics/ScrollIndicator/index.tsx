import ArrowDown from "assets/icons/arrow-down-dark-green.svg";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import * as S from "./styles";

function ScrollIndicator(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "scrollIndicator",
  });

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setVisible(window.scrollY < 100);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <S.Pill visible={visible}>
      <S.Icon src={ArrowDown} />
      {t("learnMore")}
    </S.Pill>
  );
}
export default ScrollIndicator;
