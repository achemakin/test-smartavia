import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 100%;
  max-width: 270px;
  padding: 24px;
  display: block;
  z-index: 100;

  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);

  background-color: var(--color-blue);
  border-radius: 15px;
  box-shadow: -4px 4px 60px -15px #C9C9C9, 4px 4px 60px -15px #C9C9C9;  

  font-size: var(--fs-s);
  font-weight: 600;
  line-height: var(--fs-l);
  color: var(--color-white);

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #7e73ff;
  }

  &:active {
    background-color: #3818b9;
  }

  :disabled {
    background-color: #d6d6d6;
  }

  @media (min-width: 768px) {
    bottom: 40px;
  }
  
  @media (min-width: 1124px) {
    max-width: 516px;
    padding: 36px;
    font-size: var(--fs-l);
  }
`;