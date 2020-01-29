import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    display: flex;
`;

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
    animation: .5s ${spin} infinite linear;
    border: 4px solid rgb(56, 85, 134);
    border-radius: 100%;
    height: 30px;
    width: 30px;
    border-bottom: 0;
    border-left: 0;
`;