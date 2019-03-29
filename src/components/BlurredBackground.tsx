import * as React from 'react';
import styled from 'styled-components';

//#region Styled Components

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #262626;
  z-index: -1;
`;

//endregion

class BlurredBackground extends React.Component {
  render() {
    return <StyledWrapper>BlurredBackground</StyledWrapper>;
  }
}

export default BlurredBackground;
