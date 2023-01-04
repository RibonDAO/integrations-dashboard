import * as S from "./styles";

export type Props = { value?: number };
function PlusMinus({ value }: Props): JSX.Element {
  if (!value || value === 0) return <div />;

  return value > 0 ? <S.PlusIcon>+</S.PlusIcon> : <S.MinusIcon>-</S.MinusIcon>;
}
export default PlusMinus;
