import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: auto;
  margin-top: 100px;
`;

export const Title = styled.h2`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;
