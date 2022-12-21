import styled from "styled-components";
import { stylizedHeadingLarge } from "styles/typography/stylized";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.gray10};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    background-size: 300px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Title = styled.h6`
  ${stylizedHeadingLarge};
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