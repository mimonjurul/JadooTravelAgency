import React from 'react';
import './Footer.css'
import facebookLogo from '../../Assests/Images/Footer/facebook.svg'
import instagramLogo from '../../Assests/Images/Footer/instagram.svg'
import twitterLogo from '../../Assests/Images/Footer/twitter.svg'
import googlePlayLogo from '../../Assests/Images/Footer/googlePlay.svg'
import appleStoreLogo from '../../Assests/Images/Footer/appleStore.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-xl-3">
              <div className="left ms-5">
                <div className="logo">
                  <h1 className='footer-logo'>Jadoo.</h1>
                  <p className='footer-logo-description'>Book your trip in minute, get full Control for much longer.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="middle ms-5">
                <h5 className='footer-list-heading'>Company</h5>
                <ul>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Mobile</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="middle ms-5">
                <h5 className='footer-list-heading'>Contact</h5>
                <ul>
                  <li>Help/FAQ</li>
                  <li>Press</li>
                  <li>Affilates</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="middle ms-5">
                <h5 className='footer-list-heading'>More</h5>
                <ul>
                  <li>Airlinefees</li>
                  <li>Airline</li>
                  <li>Low fare tips</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="right ms-5">
                <div className="social-logo">
                  <img src={facebookLogo} alt="" />
                  <img src={instagramLogo} alt="" className='footer-insta-logo' />
                  <img src={twitterLogo} alt="" />
                </div>
                <h4 className='discover-apps'>Discover our app</h4>
                <div className="apps">
                  <img src={googlePlayLogo} alt="" />
                  <img src={appleStoreLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">All rights reserved@jadoo.co</p>
        </div>
      </div>
    </div>
  )
}

export default Footer