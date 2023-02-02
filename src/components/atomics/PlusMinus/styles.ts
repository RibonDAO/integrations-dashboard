import styled, { css } from "styled-components";
import { defaultHeadingXs } from "styles/typography/default";

export const Container = styled.div`
  ${() => css``}
`;

export const PlusIcon = styled.p`
  ${defaultHeadingXs}

  display: inline;
  color: ${({ theme }) => theme.colors.green30};
`;

export const MinusIcon = styled.p`
  ${defaultHeadingXs}

  display: inline;
  color: ${({ theme }) => theme.colors.red30};
`;
