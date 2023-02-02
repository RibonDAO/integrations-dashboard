import styled from "styled-components";
import {
  defaultBodyXsRegular,
  defaultBodyMdBold,
} from "styles/typography/default";
import { Line } from "react-chartjs-2";

export const Container = styled.div`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.h6`
  ${defaultBodyMdBold}

  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.colors.gray30};
`;

export const Chart = styled(Line)``;

export const LegendsContainer = styled.div`
  margin: 16px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Legend = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const LegendColor = styled.div<{ color: string }>`
  width: 20px;
  height: 4px;
  margin: 0 8px 0 0;
  background: ${({ color }) => color};
`;

export const LegendText = styled.p`
  ${defaultBodyXsRegular}

  margin: ${({ theme }) => theme.spacing(0)};
  color: ${({ theme }) => theme.colors.gray30};
`;
