import React from 'react';
import './Testimonials.css';
import authorImage from '../../Assests/Images/Testimonials/right-author.png';
import slideDots from '../../Assests/Images/Testimonials/left-slide-dots.svg';





const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="container">
        <div className="main-content">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="testimonial-left">
                <h5 className='testimonial-title'>Testimonial</h5>
                <h2 className='testimonial-heading'>What People Say About Us.</h2>
                <img src={slideDots} alt="" className='testimonials-left-slide-dots' />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1">
              <div className="testimonial-right">
                <div className="author">
                  <img src={authorImage} alt="" className="author-image" />
                  <p className='author-words'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                  <h5 className='author-name'>Mike taylor</h5>
                  <p className='author-location'>Lahore, Pakistan</p>
                </div>
                <div className="right-slide-arrow">
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials