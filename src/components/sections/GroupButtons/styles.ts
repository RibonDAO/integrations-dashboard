import styled from "styled-components";
import { defaultBodyXsSemibold } from "styles/typography/default";

export const Button = styled.button<{
  outline?: boolean;
}>`
  width: auto;
  height: 32px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 4px 8px;
  border: 1px solid
    ${(props) =>
      props.outline ? props.theme.colors.gray30 : props.theme.colors.green40};
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray10};
  color: ${(props) =>
    props.outline ? props.theme.colors.gray30 : props.theme.colors.green40};
`;

export const ButtonText = styled.p`
  ${defaultBodyXsSemibold}
`;

export const ButtonIcon = styled.img``;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
`;
