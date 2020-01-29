import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: .2;
  }
  50% {
    opacity: .6;
  }
  100% {
    opacity: .2;
  }
`

export const Card = styled.div`
    position: relative;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    padding: 16px;
    animation: ${blink} .8s linear forwards infinite;
`;

export const Date = styled.span`
    margin-bottom: 16px;
    display: block;
`;

export const DateMock = styled.div`
    height: 32px;
    background-color: rgb(56, 85, 134);
`;

export const Framework = styled.figure`
    background-color: #eeeeee;
    margin-bottom: 16px;
    padding: 12px;
`;

export const FrameworkMock = styled.div`
    height: 64px;
`;

export const Row = styled.div`
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
`;

export const Column = styled.div`
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    display: flex;
    padding: 8px;
`;

export const RealTemperature = styled.span`
    font-weight: 700;
    font-size: 36px;
    color: #333333;
`;

export const Temperature = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
`;

export const TemperatureLabel = styled.span`
    font-style: italic;
    font-size: 12px;
`;

export const TemperatureCurrent = styled.span`
    font-size: 24px;

    small {
        font-size: 12px;
    }
`;

export const TemperatureMock = styled.div`
    background-color: #eeeeee;
    height: 32px;
    width: 70px;
`;