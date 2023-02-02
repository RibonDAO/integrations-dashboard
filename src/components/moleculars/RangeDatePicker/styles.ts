import styled from "styled-components";
import ArrowDown from "assets/icons/arrow-down.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DatePickerWrapper = styled.div`
  margin-inline: 16px;
  padding-inline: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green30};

  * .react-datepicker__input-container {
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray30};

    input {
      width: 100%;
      border: none;
      background-color: transparent;
    }

    ::after {
      width: 16px;
      height: 16px;
      margin-left: 8px;
      content: url(${ArrowDown});
      display: flex;
      align-items: center;
      pointer-events: none !important;
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray30};
`;
