import moment from 'moment';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, author, details, image_url, rating, title, total_view } = news;

    return (
        <div>
            <Row>
                <Col>
                    <Card className='mb-3'>
                        <div className='bg-light d-flex justify-content-between align-items-center'>
                            <div className='d-flex gap-3 align-items-center p-2'>
                                <div>
                                    <img src={author.img} alt="" style={{ height: '50px' }} className='rounded-pill' />
                                </div>
                                <div>
                                    <h5>{author.name}</h5>
                                    <h6 className='text-muted'>{
                                        moment(author.published_date).format("YYYY-MM-DD")
                                    }</h6>
                                </div>
                            </div>
                            <div className='p-3'>
                                <FaRegBookmark className='fs-4'></FaRegBookmark>
                                <FaShareAlt className='fs-4'></FaShareAlt>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Img variant="top" src={image_url} className='w-100 mb-4' />
                            <Card.Text>
                                {details.length < 200 ? <>{details}</> :
                                    details.slice(0, 200)
                                }
                                ... <Link to={`/news/${_id}`} className='text-warning text-decoration-none'>Read More</Link>

                                <hr className='my-4' />

                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <Rating
                                            placeholderRating={rating.number}
                                            emptySymbol={<FaStar></FaStar>}
                                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                            readonly
                                        />
                                        <p className='m-0'>{rating.number}</p>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <FaEye className='fs-5'></FaEye>
                                        <p className='m-0'>{total_view}</p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default NewsCard;