import { useEffect, useState } from "react";
import * as S from "./styles";

export type Props = {
  elements: any[];
  onChange?: (element: any, index: number, event?: any) => void;
  nameExtractor: (element: any) => string;
  indexSelected?: number;
};

function GroupButtons({
  elements,
  onChange,
  nameExtractor,
  indexSelected,
}: Props): JSX.Element {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleElementClick = (index: number, element: any, event?: any) => {
    setSelectedButtonIndex(index);
    if (onChange) onChange(element, index, event);
  };

  useEffect(() => {
    if (indexSelected !== undefined) {
      handleElementClick(indexSelected, elements[indexSelected]);
    }
  }, [indexSelected]);

  function renderGroupButtons() {
    return elements?.map((element, index) => (
      <S.Button
        outline={index !== selectedButtonIndex}
        onClick={(e) => handleElementClick(index, element, e)}
        // eslint-disable-next-line react/no-array-index-key
        key={index.toString()}
      >
        {element.iconOn && (
          <S.ButtonIcon
            src={
              index === selectedButtonIndex ? element.iconOn : element.iconOff
            }
          />
        )}
        <S.ButtonText>{nameExtractor(element)}</S.ButtonText>
      </S.Button>
    ));
  }

  return <S.Container>{renderGroupButtons()}</S.Container>;
}

export default GroupButtons;
