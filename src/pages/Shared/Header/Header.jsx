import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div>
            <section className="text-center my-4">
                <img src={logo} alt="" />
                <h5 className='text-muted my-3'>Journalism Without Fear or Favour</h5>
                <h5>
                    {
                        moment().format('dddd, MMMM D, YYYY')
                    }
                </h5>
            </section>

            <section className='bg-light p-3 d-flex align-items-center gap-4'>
                <Link to={'/'}><Button variant='danger' className='rounded-0 px-3 py-2'>Latest</Button></Link>
                <Marquee pauseOnHover speed={100} className='fw-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
            </section>
        </div>
    );
};

export default Header;