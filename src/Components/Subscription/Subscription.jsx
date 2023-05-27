import React from 'react';
import './Subsription.css';
import leftShape from '../../Assests/Images/Subscription/left-shape.svg'
import rightShape from '../../Assests/Images/Subscription/right-shape.svg'
import teleLogo from '../../Assests/Images/Subscription/telegram-logo.svg'

const Subscription = () => {
  return (
    <div className='subscription'>
      <div className="container">
        <div className="main-content">
          <img src={leftShape} alt="" className="Subscription-left-shape"/>
          <img src={rightShape} alt="" className="Subscription-right-shape"/>
          <img src={teleLogo} alt="" className="teleLogo"/>
          <h2 className='subscription-heading text-center'>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
          <div className="subscription-bottom">
            <div className="input-field">
              <i className="fa-regular fa-envelope-open"></i>
              <input type="email" placeholder="Your email" />
            </div>
            <button type='button'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription