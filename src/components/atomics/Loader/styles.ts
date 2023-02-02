import styled, { css } from "styled-components";

export const Loader = styled.div`
  ${() => css`
    width: 40px;
    height: 40px;
    margin-block: 16px;
    border: 10px solid ${({ theme }) => theme.colors.neutral10};
    border-top: 5px solid ${({ theme }) => theme.colors.orange20};
    border-left: 5px solid ${({ theme }) => theme.colors.orange20};
    border-radius: 50%;
    animation: spin 0.5s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
