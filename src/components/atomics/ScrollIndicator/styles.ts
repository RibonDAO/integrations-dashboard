import styled from "styled-components";

export const Pill = styled.div<{ visible: boolean }>`
  padding-block: 5px;
  padding-inline: 10px;
  border: 1px solid ${({ theme }) => theme.colors.green40};
  border-radius: 20px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  z-index: ${({ theme }) => theme.zindex.above};
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.colors.neutral10};
  color: ${({ theme }) => theme.colors.green40};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  opacity: ${({ visible }) => (visible ? "100%" : "0")};
  transition: opacity 0.3s ease-in-out;
  transform: translate(-50%, 0);
`;

export const Icon = styled.img`
  margin-inline-end: 5px;
  width: 10px;
  height: 10px;
  margin-block: auto;
`;
