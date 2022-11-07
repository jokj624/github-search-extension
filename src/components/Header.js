import React from 'react';
import logo from '../assets/logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Header = () => {
    
    return (
        <Container style={{ padding: '.5rem' }}>
            <Row>
                <Col>
                    <img src={logo} width='32px' height='32px' />
                    <HeaderText>Github Finder</HeaderText>
                </Col>
            </Row>
        </Container>
    ); 
}

export default Header;

const HeaderText = styled.div`
    margin: .5rem;
    font-size: 1rem;
    color: white;
`;