import React from "react";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #f4511e;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const StyledSpinnerCover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Loader = () => <StyledSpinnerCover><StyledSpinner /></StyledSpinnerCover>;

export default Loader;