import styled from "styled-components";
import Shape from "assets/images/green-diamond-shape.svg";
import { stylizedHeadingLarge } from "styles/typography/stylized";
import {
  defaultHeadingLarge,
  defaultParagraphMedium,
  defaultParagraphSmall,
  defaultTitleLarge,
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

export const ParticipatingDonorsTrendText = styled.h6`
  ${defaultTitleLarge};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const ParticipatingDonorsSubtext = styled.p`
  ${defaultParagraphMedium};
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const ParticipatingDonorsTrendSubtext = styled.p`
  ${defaultParagraphSmall};
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const DonationsPerDayText = styled.h6`
  ${defaultTitleLarge};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.orange20};
  opacity: 0.8;
`;

export const DonationsPerDaySubtext = styled.p`
  ${defaultParagraphSmall};
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const DonorsPerDayText = styled.h6`
  ${defaultTitleLarge};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.orange20};
  opacity: 0.8;
`;

export const DonorsPerDaySubtext = styled.p`
  ${defaultParagraphSmall};
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const NewDonorsText = styled.h6`
  ${defaultTitleLarge};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.orange20};
  opacity: 0.8;
`;

export const NewDonorsSubtext = styled.p`
  ${defaultParagraphSmall};
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const ReturningDonorsText = styled.h6`
  ${defaultTitleLarge};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.orange20};
  opacity: 0.8;
`;

export const ReturningDonorsSubtext = styled.p`
  ${defaultParagraphSmall};
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

export const ImpactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 16px;
  row-gap: 16px;

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
