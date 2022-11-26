import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const Global = createGlobalStyle`  
  ${normalize}

  :root {
    // font
    --ff-primary: 'Montserrat', sans-serif;;

    // colors
    --color-white: #ffffff;
    --color-grey: #fafafa;
    --color-blue: #584afb;
    --color-yellow: #ffb500;
    --color-dark: #141047;
    --color-red: #fb5f4a;

    // font-weight
    --fw-400: 400;
    --fw-600: 600;

    // font-size
    --fs-xl: 80px;
    --fs-l: 30px; 
    --fs-s: 24px;
    --fs-xs: 16px;

    // line-height
    --lh-xl: 98px;
    --lh-l: 36px;
    --lh-s: 30px;
    --lh-xs: 20px;
  }

  body {
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--color-grey);
    color: var(--color-dark);
    font-size: var(--fs-l);
    line-height: var(--lh-l);
    min-width: 320px;
  }

  #root {
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;    
  }
`;

export default Global;
