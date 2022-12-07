import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import "./react-datepicker-theme.css";
import * as S from "./styles";

export type Props = {
  startDate: Date;
  endDate: Date;
  handleStartDateChange: (date: Date) => void;
  handleEndDateChange: (date: Date) => void;
};

function RangeDatePicker({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "rangeDatePicker",
  });

  return (
    <S.Container>
      <S.Text>{t("from")}</S.Text>
      <S.DatePickerWrapper>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => handleStartDateChange(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </S.DatePickerWrapper>
      <S.Text>{t("to")}</S.Text>
      <S.DatePickerWrapper>
        <DatePicker
          selected={endDate}
          onChange={(date: Date) => handleEndDateChange(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </S.DatePickerWrapper>
    </S.Container>
  );
}
export default RangeDatePicker;
