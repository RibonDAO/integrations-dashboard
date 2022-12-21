import styled from "styled-components";
import Shape from "assets/images/green-diamond-shape.svg";
import { stylizedHeadingLarge } from "styles/typography/stylized";
import {
  defaultHeadingLarge,
  defaultParagraphMedium,
} from "styles/typography/default";

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  background: url(${Shape}) no-repeat;
  background-position: top right;
  background-size: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    background-size: 300px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    padding: 0 20%;
  }
`;

export const Title = styled.h6`
  ${stylizedHeadingLarge};
  margin: 8px 0 24px 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ParticipatingDonorsText = styled.h6`
  ${defaultHeadingLarge};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.orange20};
`;

export const ParticipatingDonorsSubtext = styled.p`
  ${defaultParagraphMedium};
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const Divider = styled.hr`
  border-top: ${({ theme }) => theme.colors.gray30};
  margin-block: 24px;
`;

export const ContentContainer = styled.div`
  display: grid;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GrayContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray10};
  min-height: 900px;
  margin: 28px -24px 0 -24px;
  padding: 32px 24px 0 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    margin: 28px -33.33% 0 -33.33%;
    padding: 32px 33.33% 0 33.33%;
  }
`;

export const ContentDiv = styled.div``;
