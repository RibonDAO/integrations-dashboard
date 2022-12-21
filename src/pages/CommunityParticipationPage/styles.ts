import styled from "styled-components";
import Shape from "assets/images/green-diamond-shape.svg";
import { stylizedHeadingLarge } from "styles/typography/stylized";
import {
  defaultHeadingLarge,
  defaultParagraphMedium,
} from "styles/typography/default";

export const Container = styled.div``;

export const CommunitySection = styled.div`
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  margin-top: 4rem;
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

export const ContentDiv = styled.div``;
