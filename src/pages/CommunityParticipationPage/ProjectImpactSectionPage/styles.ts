import styled from "styled-components";
import { stylizedTitleLarge } from "styles/typography/stylized";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h6`
  ${stylizedTitleLarge};
  margin: 8px 0 24px 0;
  color: ${({ theme }) => theme.colors.green40};
`;

export const ImpactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
