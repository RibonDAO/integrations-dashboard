import * as S from "./styles";

export type Props = {
  mainText?: string;
  secondaryText?: string;
  image?: string;
};

function CardCroppedImage({
  mainText,
  secondaryText,
  image,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.SupportImage src={image} />
      <S.InnerContainer>
        <S.MainText>{mainText}</S.MainText>
        <S.SubText>{secondaryText}</S.SubText>
      </S.InnerContainer>
    </S.Container>
  );
}

export default CardCroppedImage;
