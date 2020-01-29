import styled from 'styled-components';

export const List = styled.ul`
    margin: 0 0 10px 0;
    list-style: none;
    display: flex;
    overflow-x: scroll;

    > li {
        margin-bottom: 16px;

        &:not(:first-child) {
            margin-left: 15px;
        }
    }
`;

export const Button = styled.button`
    background-color: ${({ active }) => active ? 'tomato' : 'rgb(56, 85, 134)'};
    border-radius: 24px;
    padding: 8px 24px;
    appearance: none;
    border: none;
    font-size: 16px;
    color: white;
    font-weight: 300;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
`;
