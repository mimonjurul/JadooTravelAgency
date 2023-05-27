import React from 'react';
import './destinaitons.css'
import cardOne from '../../Assests/Images/Destination/cardOne.png'
import cardTwo from '../../Assests/Images/Destination/cardTwo.png'
import cardThree from '../../Assests/Images/Destination/cardThree.png'
import destinationShape from '../../Assests/Images/Destination/destinationShape.svg'

const DestinationCard = (props) => {
  return (
    <div className="destinations-card">
      <img src={props.CardImg} alt="" className='card-image' />
      <div className="card-info">
        <div className='place-pricing d-flex justify-content-between'>
          <h5 className='place'>{props.place}</h5>
          <h5 className='pricing'>{props.price}</h5>
        </div>
        <p className='days'><i className="fa-solid fa-location-arrow"></i>{props.days}</p>
      </div>
    </div>
  )
}

const Destinations = () => {
  return (
    <div className='destinations'>
      <div className="container position-relative">
        <div className="destinations-top">
          <h4 className='destinations-title'>Top Selling</h4>
          <h2 className='destinations-heading'>Top Destinations</h2>
        </div>
        <div className="destinations-bottom position-relative">
          <div className="destinations-section-img position-absolute">
            <img src={destinationShape} alt="" />
          </div>
          <div className="row">
            <div className="col-xl-4 d-flex justify-content-center">
              <DestinationCard CardImg={cardOne} place="Rome, Italty" price="$5,42k" days="10 Days Trip" />
            </div>
            <div className="col-xl-4 d-flex justify-content-center">
              <DestinationCard CardImg={cardTwo} place="London, UK" price="$4.2k" days="12 Days Trip" />
            </div>
            <div className="col-xl-4 d-flex justify-content-center">
              <DestinationCard CardImg={cardThree} place="Full Europe" price="$15k" days="28 Days Trip" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations