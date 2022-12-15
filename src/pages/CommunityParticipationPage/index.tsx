import IconAndText from "components/atomics/IconAndText";
import { useState } from "react";
import RibonIconSquared from "assets/icons/ribon-icon-squared.svg";
import RangeDatePicker from "components/moleculars/RangeDatePicker";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

function CommunityParticipationPage(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "communityParticipationPage",
  });

  const [endDate, setEndDate] = useState<Date>(new Date());

  const previousDate = (date: Date, days: number) =>
    new Date(new Date(date).setDate(new Date(date).getDate() - days));

  const [startDate, setStartDate] = useState<Date>(previousDate(endDate, 7));

  return (
    <S.Container>
      <S.InnerContainer>
        <IconAndText icon={RibonIconSquared} text="Dinheiro na nota" />
        <S.Title>{t("title")}</S.Title>
        <S.Divider />

        <RangeDatePicker
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={setStartDate}
          handleEndDateChange={setEndDate}
        />
      </S.InnerContainer>
    </S.Container>
  );
}
export default CommunityParticipationPage;
