import styled from "styled-components";
import Shape from "assets/images/green-diamond-shape.svg";
import { stylizedDisplayLg } from "styles/typography/stylized";

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${Shape}) no-repeat;
  background-position: top right;
  background-size: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    background-size: 300px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(16)};
  padding: ${({ theme }) => theme.spacing(0, 24)};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    padding: 0 20%;
    margin-top: ${({ theme }) => theme.spacing(40)};
  }
`;

export const Title = styled.h6`
  ${stylizedDisplayLg}

  margin: ${({ theme }) => theme.spacing(36, 0, 24)};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(24)};
`;

export const Divider = styled.hr`
  margin-bottom: ${({ theme }) => theme.spacing(32)};
  border-top: ${({ theme }) => theme.colors.gray30};
`;

export const ContentContainer = styled.div`
  display: grid;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GrayContainer = styled.div`
  margin: 28px -24px 0;
  padding: ${({ theme }) => theme.spacing(32, 24, 80, 24)};
  background-color: ${({ theme }) => theme.colors.gray10};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    margin: 28px -33.33% 0;
    padding: 32px 33.33% 80px 33.33%;
  }
`;

export const ImpactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
  column-gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ContentDiv = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: flex;
  }
`;

export const InnerContentDiv = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: 50%;
  }
`;
