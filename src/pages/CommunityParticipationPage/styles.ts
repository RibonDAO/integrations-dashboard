import styled from "styled-components";
import Shape from "assets/images/green-diamond-shape.svg";
import { stylizedHeadingLarge } from "styles/typography/stylized";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${Shape}) no-repeat;
  background-position: top right;
  background-size: 200px;
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
  margin-top: 4rem;
`;

export const Title = styled.h6`
  ${stylizedHeadingLarge}
  margin: 8px 0 24px 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Divider = styled.hr`
  border-top: ${({ theme }) => theme.colors.gray30};
`;
