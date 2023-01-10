import styled from "styled-components";
import {
  defaultParagraphSmall,
  defaultTitleSmall,
} from "styles/typography/default";
import { Line } from "react-chartjs-2";

export const Container = styled.div`
  width: 100%;
  margin: 32px 0 32px 0;
`;

export const Title = styled.h6`
  ${defaultTitleSmall};
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.colors.gray30};
  font-weight: ${({ theme }) => theme.font.medium};
`;

export const Chart = styled(Line)``;

export const LegendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0 0 0;
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const LegendColor = styled.div<{ color: string }>`
  width: 20px;
  height: 4px;
  background: ${({ color }) => color};
  margin: 0 8px 0 0;
`;

export const LegendText = styled.p`
  ${defaultParagraphSmall};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray30};
`;
