import styled from "styled-components";
import WaveCut from "assets/images/wave-cut.svg";
import {
  defaultBodySmRegular,
  defaultHeadingXs,
} from "styles/typography/default";

export const Container = styled.div`
  min-height: 326px;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};
`;

export const InnerContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(20, 16)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SupportImage = styled.img`
  mask-image: url(${WaveCut});
  mask-size: 100% 100%;
  width: 100%;
  height: 136px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.gray10};
  filter: brightness(0.5);
`;

export const MainText = styled.h1`
  ${defaultHeadingXs}
  color: #0ea472;
`;

export const SubText = styled.h2`
  ${defaultBodySmRegular}

  color: ${({ theme }) => theme.colors.gray30};
`;

export const InternalImage = styled.img`
  mix-blend-mode: screen;
  width: 120px;
  height: 120px;
  margin-top: ${({ theme }) => theme.spacing(8)};
  position: absolute;
  left: calc(50% - 60px);
  z-index: 1;
  filter: grayscale(100%) brightness(68%) saturate(0%) contrast(1000%);
`;
