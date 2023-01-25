import styled from "styled-components";
import {
  defaultHeadingLg,
  defaultBodySmRegular,
  defaultBodyXsRegular,
  defaultHeadingXs,
} from "styles/typography/default";

export const Container = styled.div`
  display: grid;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const OuterColumn = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: flex;
  }
`;

export const InnerColumn = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: 50%;
  }
`;

export const Block = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const BigNumber = styled.h6`
  ${defaultHeadingLg};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.orange20};
`;

export const Percentage = styled.h6`
  ${defaultHeadingXs};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const SmallNumber = styled.h6`
  ${defaultHeadingXs};
  margin: 28px 0 0 0;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.orange20};
`;

export const BigSubtitle = styled.p`
  ${defaultBodySmRegular};
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const SmallSubtitle = styled.p`
  ${defaultBodyXsRegular};
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.gray30};
`;
