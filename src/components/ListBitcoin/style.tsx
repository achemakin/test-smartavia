import styled, { css } from 'styled-components';

export const List = styled.ul`
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 44px;
  }
`;

export const Item = styled.li`
  width: 100%;
  max-width: 1058px;
  height: 120px;

  @media (min-width: 768px) {
    height: 210px;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;

  background-color: var(--color-white);
  border-radius: 15px;

  box-shadow: 4px 4px 60px -15px #C9C9C9;
  box-shadow: -4px 4px 60px -15px #C9C9C9;

  @media (min-width: 768px) {
    svg {
      width: 57px;
      height: 57px;
    }
  }
`;

export const CardInfo = styled.div``;

export const CardСaption = styled.p`
    font-size: var(--fs-xs);
    font-weight: var(--fw-400);
    line-height: var(--lh-xs);
`;

export const CardAddress = styled.p`
  font-size: var(--fs-xs);
  font-weight: var(--fw-600);
  line-height: var(--lh-s);
  word-break: break-all;

  @media (min-width: 768px) {
    font-size: var(--fs-s);
  }
`;


export const ButtonCopy = styled.button`
  &:hover {
    svg {
      path {
        stroke: #7e73ff;
      }
    }
  }

  &:active {
    svg {
      path {
        stroke: #3818b9;
      }
    }
  }
`;

export const CardError = styled(Card)`
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: var(--color-red);
  color: var(--color-white);
`;

export const TextError = styled.p`
  color: var(--color-white);
  font-size: var(--fs-xs);
  font-weight: var(--fw-600);
  line-height: var(--lh-xs);

  @media (min-width: 768px) {
    font-size: var(--fs-s);
    line-height: var(--lh-s);
  }
`;

export const ImgError = styled.img`
  display: block;
  width: 66px;
  height: 50px;

  @media (min-width: 768px) {
    width: unset;
    height: unset;
  }
`;


export const CardLoad = styled(Card)`
  padding: 15px 30px;
  background-color: var(--color-blue);
  flex-direction: column;
  align-content: end;
  gap: 10px;

  @media (min-width: 768px) {
    padding: 36px 110px;
  }

`;

export const LoadProgress = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 16px;
  background-color: var(--color-white);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-yellow);
    animation: loadProgress 3s linear;
  }

  @keyframes loadProgress {
    0% {
      right: 100%;
    }

    100% {
      right: 0;
    }
  }
`;

export const LoadIcon = styled.div`
  --width-icon: 30px;
  width: 100%;
  height: 30px;
  background-color: transparent;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--width-icon);
    left: calc(100% - var(--width-icon));
    background-color: transparent;    
    background-image: url('./img/bitcoin.svg');
    background-position: center;
    background-size: contain;
    animation: loadBitcoin 3s linear;
  }

  @media (min-width: 768px) {
    --width-icon: 60px;
    height: 60px;

    &::after {
      width: var(--width-icon);
      left: calc(100% - var(--width-icon));
    }
  }

  @keyframes loadBitcoin {
    0% {
      left: 0;
      transform: rotate(0);
    }

    100% {
      left: calc(100% - var(--width-icon));
      transform: rotate(360deg);
    }
  }
`;