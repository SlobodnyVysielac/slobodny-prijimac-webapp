import * as React from 'react';
import styled from 'styled-components';
import {Sizes} from '../components/css/GlobalStyle';

//#region Styled Components

const StyledPanelDiv = styled.div`
  border-radius: ${Sizes.borderRadiusPx}px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.22);
  padding: 1em;
`;

//endregion

interface Props {
  className?: string;
}

const Panel: React.FunctionComponent<Props> = ({className, children}) => (
  <StyledPanelDiv className={className}>{children}</StyledPanelDiv>
);

export default Panel;
