import styled from 'styled-components';

export const MainEl = styled.main`
  padding: 50px 0 165px;
  flex-grow: 1;
  position: relative;
`;

export const ImgBackground = styled.div`  
  position: fixed;
  z-index: -1;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    bottom: 94px;
  }

  @media (min-width: 1124px) {
    bottom: 140px;
    svg {
      width: 480px;
      height: 302px;
    }
  }
`;