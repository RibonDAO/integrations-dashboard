import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;
