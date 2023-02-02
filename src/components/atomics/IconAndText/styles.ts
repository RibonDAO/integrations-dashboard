import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.img`
  width: 40px;
  margin-right: ${({ theme }) => theme.spacing(8)};
  padding-right: ${({ theme }) => theme.spacing(8)};
  border-right: 2px solid ${({ theme }) => theme.colors.gray20};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray30};
`;
