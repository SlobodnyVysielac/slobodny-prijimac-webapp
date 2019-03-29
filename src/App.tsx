import React, {Component, Fragment} from 'react';
import BlurredBackground from './components/BlurredBackground';
import NormalizeCss from './components/css/Normalizecss';
import IconWhitePng from './media/icon-white.png';
import styled from 'styled-components';
import GlobalStyle from './components/css/GlobalStyle';

//#region Styled Components

const StyledFullscreenAbsoluteDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

//endregion

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NormalizeCss />
        <GlobalStyle />

        <BlurredBackground />

        <StyledFullscreenAbsoluteDiv>
          <img src={IconWhitePng} alt="IconWhitePng" />
        </StyledFullscreenAbsoluteDiv>
      </Fragment>
    );
  }
}
