import styled, { css } from "styled-components";
import { defaultTitleLarge } from "styles/typography/default";

export const Container = styled.div`
  ${() => css``}
`;

export const PlusIcon = styled.p`
  ${defaultTitleLarge};
  color: ${({ theme }) => theme.colors.green30};
  display: inline;
`;

export const MinusIcon = styled.p`
  ${defaultTitleLarge};
  color: ${({ theme }) => theme.colors.red30};
  display: inline;
`;
