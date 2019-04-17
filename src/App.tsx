import React, {Component, Fragment} from 'react';
import BlurredBackground from './components/BlurredBackground';
import NormalizeCss from './components/css/Normalizecss';
import IconWhitePng from './media/icon-white.png';
import styled from 'styled-components';
import GlobalStyle from './components/css/GlobalStyle';
import Panel from './components/Panel';

//#region Styled Components

const StyledFullscreenAbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  width: 100%;
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
          <Panel>
            <StyledImg src={IconWhitePng} alt="IconWhitePng" />
          </Panel>
        </StyledFullscreenAbsoluteDiv>
      </Fragment>
    );
  }
}
