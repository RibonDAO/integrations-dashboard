import * as S from "./styles";

export type Props = {
  mainText?: string;
  secondaryText?: any;
  image?: string;
  internalImage?: string;
};

function CardCroppedImage({
  mainText,
  secondaryText,
  image,
  internalImage,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.InternalImage src={internalImage} />
      <S.SupportImage src={image} />
      <S.InnerContainer>
        <S.MainText>{mainText}</S.MainText>
        <S.SubText>{secondaryText}</S.SubText>
      </S.InnerContainer>
    </S.Container>
  );
}

export default CardCroppedImage;
