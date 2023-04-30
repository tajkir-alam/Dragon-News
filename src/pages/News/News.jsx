import React from 'react';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {
    const singleNews = useLoaderData();
    const { details, image_url, title, category_id } = singleNews;

    return (
        <div>
        <section>
            <Card className='p-3'>
                <Card.Img variant="top" src={image_url} className='w-100' />
                <Card.Body>
                    <Card.Title className='fw-bold my-3'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`} className='text-decoration-none'>
                        <Button variant="danger" className='d-flex gap-2 align-items-center mt-4 rounded-0 px-4'>
                            <FaArrowLeft></FaArrowLeft>
                            All news in this category
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </section>

        <section className='my-5'>
            <h3 className='my-3'>Editors Insight</h3>
            <Row sm={1} md={3}>
                <Col>
                    <Card className='mb-2 border-0'>
                        <Card.Img variant="top" src={img1} className='w-100' />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                <strong>sports</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='mb-2 border-0'>
                        <Card.Img variant="top" src={img2} className='w-100' />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                <strong>sports</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='mb-2 border-0'>
                        <Card.Img variant="top" src={img3} className='w-100' />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                <strong>sports</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    </div>
    );
};

export default News;