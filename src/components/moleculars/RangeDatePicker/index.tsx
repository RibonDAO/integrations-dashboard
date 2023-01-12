import { MODAL_TYPES } from "contexts/modalContext/helpers";
import DatePicker, { registerLocale } from "react-datepicker";
import { useTranslation } from "react-i18next";
import "./react-datepicker-theme.css";
import ScheduleErrorImage from "assets/images/schedule-error.svg";
import { useModal } from "hooks/modalHooks/useModal";
import { getLocalStorageItem } from "@ribon.io/shared/lib";
import br from "date-fns/locale/pt-BR";
import en from "date-fns/locale/en-US";
import * as S from "./styles";

export type Props = {
  startDate: Date;
  endDate: Date;
  handleStartDateChange: (date: Date) => void;
  handleEndDateChange: (date: Date) => void;
  customDateFormat?: string;
};

function RangeDatePicker({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
  customDateFormat,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "rangeDatePicker",
  });

  const lang = getLocalStorageItem("LANGUAGE_KEY");

  registerLocale("pt-BR", br);
  registerLocale("en-US", en);

  const { show, hide } = useModal({
    type: MODAL_TYPES.MODAL_IMAGE,
    props: {
      title: t("invalidDateRangeModalTitle"),
      body: t("invalidDateRangeModalBody"),
      primaryButtonText: t("invalidDateRangeModalClose"),
      primaryButtonCallback: () => {
        hide();
      },
      onClose: () => hide(),
      image: ScheduleErrorImage,
    },
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
        show();
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
          locale={lang === "pt-BR" ? "pt-BR" : "en-US"}
          selected={startDate}
          onChange={(date: Date) =>
            validateAndSetDate(date, handleStartDateChange, date <= endDate)
          }
          maxDate={new Date()}
          dateFormat={customDateFormat}
        />
      </S.DatePickerWrapper>
      <S.Text>{t("to")}</S.Text>
      <S.DatePickerWrapper>
        <DatePicker
          locale={lang === "pt-BR" ? "pt-BR" : "en-US"}
          selected={endDate}
          onChange={(date: Date) =>
            validateAndSetDate(date, handleEndDateChange, date >= startDate)
          }
          maxDate={new Date()}
          dateFormat={customDateFormat}
        />
      </S.DatePickerWrapper>
    </S.Container>
  );
}
export default RangeDatePicker;
