import styled from "styled-components";
import WaveCut from "assets/images/wave-cut.svg";
import { defaultSubtitleMedium } from "styles/typography/default";

export const Container = styled.div`
  position: relative;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};
  min-height: 326px;
`;

export const InnerContainer = styled.div`
  padding: 20px 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
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
  color: ${({ theme }) => theme.colors.green20};
`;

export const SubText = styled.h2`
  ${defaultSubtitleMedium}

  color: ${({ theme }) => theme.colors.gray30};
`;

export const InternalImage = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  left: calc(50% - 60px);
  margin-top: 8px;
  z-index: 1;
  filter: grayscale(100%) brightness(68%) saturate(0%) contrast(1000%);
  -webkit-filter: grayscale(100%) brightness(68%) saturate(0%) contrast(1000%);
  -moz-filter: grayscale(100%) brightness(68%) saturate(0%) contrast(1000%);

  mix-blend-mode: screen;
`;
