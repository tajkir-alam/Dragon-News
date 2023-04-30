import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import TopNav from '../pages/Shared/TopNav/TopNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <Container>
            <Header></Header>
            <TopNav></TopNav>

            <Row className='mt-4'>
                <Col md={9}>
                    <Outlet></Outlet>
                </Col>

                <Col md={3}>
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsLayout;