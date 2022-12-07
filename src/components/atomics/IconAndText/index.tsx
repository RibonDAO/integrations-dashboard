import * as S from "./styles";

export interface Props {
  icon: string;
  text: string;
}

function IconAndText({ icon, text }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Icon src={icon} />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
export default IconAndText;
