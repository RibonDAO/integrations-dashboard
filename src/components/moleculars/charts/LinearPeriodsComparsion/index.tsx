import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  ChartOptions,
  ChartData,
} from "chart.js";
import { hexToRgbaString } from "lib/colorCodeConverter";
import { useTranslation } from "react-i18next";
import theme from "styles/theme";
import * as S from "./styles";

export type Props = {
  title: string;
  color?: any;
  currentPeriodData: Array<number>;
  previousPeriodData: Array<number>;
  labels: Array<string>;
  daysOffset: number;
};

function LinearPeriodsComparsion({
  title,
  color = theme.colors.orange30,
  currentPeriodData,
  previousPeriodData,
  labels,
  daysOffset,
}: Props): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "linearPeriodsComparsion",
  });

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
  );

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: t("currentPeriod"),
        borderColor: hexToRgbaString(color),
        data: currentPeriodData,
      },
      {
        label: t("daysBefore", {
          value: daysOffset,
        }),
        borderColor: hexToRgbaString(color, 0.2),
        data: previousPeriodData,
      },
    ],
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Chart data={data} options={options} height={100} />
      <S.LegendsContainer>
        <S.Legend>
          <S.LegendColor color={color} />
          <S.LegendText>{t("currentPeriod")}</S.LegendText>
        </S.Legend>
        <S.Legend>
          <S.LegendColor color={hexToRgbaString(color, 0.2)} />
          <S.LegendText>
            {t("daysBefore", {
              value: daysOffset,
            })}
          </S.LegendText>
        </S.Legend>
      </S.LegendsContainer>
    </S.Container>
  );
}
export default LinearPeriodsComparsion;
