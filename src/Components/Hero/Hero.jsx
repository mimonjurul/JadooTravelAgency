import React from 'react';
import Navbar from '../Navbar/Navbar';
import bannerImage from '../../Assests/Images/Hero/hero.png';
import shape from '../../Assests/Images/Hero/shape.svg';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar />
      <div className="container">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="hero-left">
                <h5 className="hero-title">Best Destinations around the world</h5>
                <h1 className="hero-heading">Travel, <span>enjoy <img src={shape} alt="" /></span> <br />
                  and live a new
                  and full life</h1>
                <p className="hero-description">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className="hero-button">
                  <button type='button' className='find-more'>Fine Out More</button>
                  <button type='button' className='play'><i className="fa-solid fa-circle-play"></i>Play Demo</button>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="hero-right">
                <img src={bannerImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero