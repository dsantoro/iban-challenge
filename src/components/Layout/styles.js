import styled from 'styled-components';

export const Grid = styled.section`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
`;

export const Card = styled.div`
    position: relative;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    padding: 16px;

    &:hover button {
        opacity: 1;
    }

    &:nth-child(1) {
        box-shadow: 1px 1px 10px rgba(56, 85, 134, .4);
    }
`;

export const Delete = styled.button`
    background-color: tomato;
    transition: opacity .4s;
    border-radius: 100%;
    position: absolute;
    appearance: none;
    cursor: pointer;
    line-height: 1;
    height: 30px;
    border: none;
    width: 30px;
    right: 10px;
    z-index: 1;
    opacity: 0;
    top: 10px;
    color: white;
`;

export const Date = styled.span`
    color: rgb(56, 85, 134);
    margin-bottom: 16px;
    text-align: center;
    font-size: 24px;
    display: block;

    small {
        font-size: 12px;
    }
`;

export const Framework = styled.figure`
    background-color: #eeeeee;
    margin-bottom: 16px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
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

export const SourcesList = styled.ul`
    justify-content: flex-end;
    list-style: none;
    display: flex;
    width: 100%;
    margin: 26px 0 32px;

    > li {
        font-size: 12px;
        &:not(:last-child) {
            margin-right: 16px;
        }
    }
`;

export const CurrentPlace = styled.h1`
    margin-bottom: 26px;
    font-size: 38px;
    color: #333333;
`;