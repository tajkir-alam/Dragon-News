import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';

const LeftNav = () => {
    const [loadCategory, setLoadCategory] = useState([]);
    
    useEffect(() => {
        fetch('https://dragon-news-data-server-tajkir-alam.vercel.app/categories')
            .then(res => res.json())
            .then(data => setLoadCategory(data))
            .catch(error => console.log(error.message))
    }, [])
    
    return (
        <div>
            <section>
                <h5>All Category</h5>
                {
                    loadCategory.map(category => <h6 key={category.id} className='ms-4'>
                        <Link to={`/category/${category.id}`}> <Button variant='' className='text-muted'>{category.name}</Button></Link>
                    </h6>).reverse()
                }
            </section>

            <section className='my-5'>
                <Card className='border-0'>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body className='p-0'>
                        <Card.Title className='my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        <Card.Text>
                            <>Sports</>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0 my-4'>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body className='p-0'>
                        <Card.Title className='my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        <Card.Text>
                            <>Sports</>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body className='p-0'>
                        <Card.Title className='my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        <Card.Text>
                            <>Sports</>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </div>
    );
};

export default LeftNav;