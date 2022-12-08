import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import "./react-datepicker-theme.css";
//  import ScheduleErrorImage from "assets/images/schedule-error.svg";
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

  const validateAndSetDate = (
    date: Date,
    callback: any,
    condition: boolean,
  ): void => {
    if (date instanceof Date && !Number.isNaN(date.valueOf())) {
      if (condition) {
        callback(date);
      } else {
        alert("Invalid date range");
      }
    } else {
      callback(new Date());
    }
  };

  return (
    <S.Container>
      <S.Text>{t("from")}</S.Text>
      <S.DatePickerWrapper>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) =>
            validateAndSetDate(date, handleStartDateChange, date <= endDate)
          }
          maxDate={new Date()}
        />
      </S.DatePickerWrapper>
      <S.Text>{t("to")}</S.Text>
      <S.DatePickerWrapper>
        <DatePicker
          selected={endDate}
          onChange={(date: Date) =>
            validateAndSetDate(date, handleEndDateChange, date >= startDate)
          }
          maxDate={new Date()}
        />
      </S.DatePickerWrapper>
    </S.Container>
  );
}
export default RangeDatePicker;
