import {createGlobalStyle} from 'styled-components';

export enum ColorPallete {
  White = '#f4f4f4',
  GrayLight = '#a6a6a6',
  Gray = '#595959',
  GrayDark = '#262626',
  Black = '#0d0d0d'
}

export const Sizes = {
  borderRadiusPx: 8
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${ColorPallete.White}
  }
`;

export default GlobalStyle;
