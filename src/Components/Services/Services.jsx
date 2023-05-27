import React from 'react';
import './Services.css';
import antina from '../../Assests/Images/Services/antina.svg';
import plane from '../../Assests/Images/Services/plane.svg';
import mic from '../../Assests/Images/Services/mic.svg';
import machine from '../../Assests/Images/Services/machine.svg';

const ServicesCard = (props) => {
  return (
    <>
      <div className="position-relative service-cards">
        <div className="position-absolute service-cards--animation"></div>
        <div className="service-cards-main-content">
          <img src={props.CardImage} alt="" />
          <h4 className="card-title">{props.title}</h4>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </>
  )
}



const Services = () => {
  return (
    <div className="container">
      <div className="service">
        <div className="services-top text-center">
          <p className="service-title">CATEGORY</p>
          <h2 className="services-heading">We Offer Best Services</h2>
        </div>
        <div className="row services-bottom">
          <div className="col-xl-3">
          <ServicesCard CardImage={antina} title="Calculated Weather " description="Built Wicket longer admire do barton vanity itself do in it. "/>
          </div>
          <div className="col-xl-3">
          <ServicesCard CardImage={plane} title="Best Flights" description="Engrossed listening. Park gate sell they west hard for the."/>
          </div>
          <div className="col-xl-3">
          <ServicesCard CardImage={mic} title="Local Events" description="Barton vanity itself do in it. Preferd to men it engrossed listening. "/>
          </div>
          <div className="col-xl-3">
          <ServicesCard CardImage={machine} title="Customization" description="We deliver outsourced aviation services for military customers "/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services