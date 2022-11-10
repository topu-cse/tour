import React from 'react';
import './About.css'
import img1 from '../../../image/img/img1.webp'
import img2 from '../../../image/img/img2.jpg'

const About = () => {
    return (
        <div>
            <div className='back-img'>
              <div className='banner-slie'>
              <p>LOVE WHERE YOU'RE GOING IN THE PERFECT TIME</p>
             <h1>A traveling around from place to place</h1>
              </div>
            </div>




            <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={img1} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={img2}  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    
                    <h1 className="my-5 text-5xl font-bold">
                    Traveling around,<br/> from place to place</h1>
                    <p className="py-6">A long journey including the visiting of a number of places in sequence, especially with an organized group led by a guide. </p>
                    <p className="py-6">one of tours are study purpose or can be helping events or family celebrating events. tour is kind of physical change in some favorite experience. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>


        </div>
    );
};

export default About;