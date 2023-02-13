import styled from "styled-components";
import { stylizedDisplayXs } from "styles/typography/stylized";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h6`
  ${stylizedDisplayXs}

  margin: ${({ theme }) => theme.spacing(8, 0, 24)};
  color: ${({ theme }) => theme.colors.green40};
`;

export const ImpactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;
  column-gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
