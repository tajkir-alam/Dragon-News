import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import TopNav from '../pages/Shared/TopNav/TopNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <TopNav></TopNav>

            <Row md={3} className='mt-4'>
                <Col>
                <LeftNav></LeftNav>
                </Col>
                
                <Col>
                    <h4>Coming..........</h4>
                </Col>
                
                <Col>
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;