import styled from "styled-components";
import ArrowDown from "assets/icons/arrow-down.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DatePickerWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.green30};
  margin-inline: 16px;
  padding-inline: 4px;

  * .react-datepicker__input-container {
    color: ${({ theme }) => theme.colors.gray30};
    width: 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
      background-color: transparent;
      border: none;
    }

    ::after {
      content: url(${ArrowDown});
      pointer-events: none !important;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray30};
`;
