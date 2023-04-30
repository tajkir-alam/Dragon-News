import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import qZoneImg1 from '../../../assets/qZone1.png';
import qZoneImg2 from '../../../assets/qZone2.png';
import qZoneImg3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';
import { AuthContext } from '../../../Providers/AuthProvider';

const RightNav = () => {
    const { signupWithEmailGoogle } = useContext(AuthContext);

    const googleSignin = () => {
        signupWithEmailGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <section>
                <h5>Login With</h5>
                <Button onClick={googleSignin} className='w-100 d-flex justify-content-center align-items-center gap-2 border border-1 border-primary mt-4' variant='' >
                    <FaGoogle></FaGoogle>
                    Login With Google
                </Button>
                <Button className='w-100 d-flex justify-content-center align-items-center gap-2 border border-1 border-dark my-2' variant='' >
                    <FaGithub></FaGithub>
                    Login With Github
                </Button>
            </section>

            <section className='mt-5'>
                <h5>Find Us On</h5>
                <Button variant='' className='border border-2 border-bottom-0 w-100 d-flex align-items-center gap-2 mt-4 px-3 py-2 fs-5 rounded-0'>
                    <FaFacebook></FaFacebook>
                    Facebook
                </Button>
                <Button variant='' className='border border-2 border-bottom-0 w-100 d-flex align-items-center gap-2 px-3 py-2 fs-5 rounded-0'>
                    <FaInstagram></FaInstagram>
                    Facebook
                </Button>
                <Button variant='' className='border border-2 w-100 d-flex align-items-center gap-2 px-3 py-2 fs-5 rounded-0'>
                    <FaTwitter></FaTwitter>
                    Facebook
                </Button>
            </section>

            <section className='my-3 bg-light p-3'>
                <h3 className='mb-4'>Q-Zone</h3>
                <img src={qZoneImg1} alt="" className='w-100' />
                <img src={qZoneImg2} alt="" className='w-100 my-4' />
                <img src={qZoneImg3} alt="" className='w-100' />
            </section>

            <section className='position-relative'>
                <img src={bg} alt="" className='w-100' />
                <div className='text-center text-light position-absolute top-0 px-4 pt-4 mt-5'>
                    <h1>Create an Amazing Newspaper</h1>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant='danger' className='rounded-0 fs-4 px-4'>Learn More</Button>
                </div>
            </section>
        </div>
    );
};

export default RightNav;