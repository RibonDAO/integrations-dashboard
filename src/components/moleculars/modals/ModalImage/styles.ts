import styled from "styled-components";
import { Modal } from "../ModalBlank/styles";

export const ModalWithImage = styled(Modal)`
  overflow: hidden;
`;

export const Container = styled.div`
  padding: 16px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100px;
  padding-top: 16px;
`;

type TitleProps = {
  color?: string;
};

export const Title = styled.h3<TitleProps>`
  text-align: center;
  color: ${({ theme, color }) => color || theme.colors.gray40};
`;

export const Body = styled.p`
  margin: ${({ theme }) => theme.spacing(8, 0, 20)};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray30};
`;

export const RowsModalRow = styled.div`
  margin-bottom: 28px;
  display: flex;
`;
