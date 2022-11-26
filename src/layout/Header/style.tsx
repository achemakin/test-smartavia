import styled from 'styled-components';

export const HeaderEl = styled.header``;

export const Title = styled.h1`
  margin-top: 50px;
  font-weight: var(--fw-600);
  font-size: var(--fs-l);
  line-height: var(--lh-l);
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1124px) {
    margin-top: 80px;
    font-size: var(--fs-xl);
    line-height: var(--lh-xl);
    text-align: left;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;  
  gap: 28px;

  @media (min-width: 1124px) {
    flex-direction: row;
    justify-content: right;
    gap: 28px;

    svg {
      width: 360px;
      height: 98px;
    }
  } 
`;

export const WrapSmall = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const ButtonClear = styled.button`
  width: 40px;
  height: 40px;

  &:hover {
    svg {
      fill: #7e73ff;
    }
  }

  &:active {
    svg {
      fill: #3818b9;
    }
  }
`;
