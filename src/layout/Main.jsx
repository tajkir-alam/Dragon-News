import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import TopNav from '../pages/Shared/TopNav/TopNav';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <TopNav></TopNav>
        </Container>
    );
};

export default Main;