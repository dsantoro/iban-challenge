import React from 'react';
import { Container } from '../Container/styles';
import { Header as ElemHeader, Logo } from './styles';

function Header() {
    return (
        <ElemHeader>
            <Container>
                <Logo>Iban Tech Challenge</Logo>
                <span>Versão 1.0</span>
            </Container>
        </ElemHeader>
    )
}

export default Header;