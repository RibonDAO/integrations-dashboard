import styled from "styled-components";

export const Pill = styled.div<{ visible: boolean }>`
  color: ${({ theme }) => theme.colors.green40};
  border: 1px solid ${({ theme }) => theme.colors.green40};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.neutral10};
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: ${({ theme }) => theme.zindex.above};
  padding-block: 5px;
  padding-inline: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  opacity: ${({ visible }) => (visible ? "100%" : "0")};
  transition: opacity 0.3s ease-in-out;
`;

export const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-inline-end: 5px;
  margin-block: auto;
`;
