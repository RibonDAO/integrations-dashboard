import styled, { css } from "styled-components";
import { defaultHeadingXs } from "styles/typography/default";

export const Container = styled.div`
  ${() => css``}
`;

export const PlusIcon = styled.p`
  ${defaultHeadingXs};
  color: ${({ theme }) => theme.colors.green30};
  display: inline;
`;

export const MinusIcon = styled.p`
  ${defaultHeadingXs};
  color: ${({ theme }) => theme.colors.red30};
  display: inline;
`;
