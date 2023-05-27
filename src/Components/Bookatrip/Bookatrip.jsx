import React from 'react';
import mainImage from '../../Assests/Images/book-a-trip/book-a-trip.png'
import shapeOne from '../../Assests/Images/book-a-trip/shapeOne.svg';
import shapeTwo from '../../Assests/Images/book-a-trip/shapeTwo.svg';
import shapeThree from '../../Assests/Images/book-a-trip/shapeThree.svg';
import './Bookatrip.css';


const BookatripCard = (props) => {
  return (
    <div className="card-content d-flex">
      <div className="left">
        <img src={props.cardImage} alt="" />
      </div>
      <div className="right">
        <h6 className='card-title'>{props.cardTitle}</h6>
        <p className='card-description'>{props.cardDescription}</p>
      </div>
    </div>
  )
}

const Bookatrip = () => {
  return (
    <div className='book-a-trip'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <div className="book-a-trip-left">
              <h5 className='book-a-trip-title'>Easy and Fast</h5>
              <h2 className='book-a-trip-heading'>Book your next trip in 3 easy steps</h2>
              <div className="book-a-trip-left-cards">
                <BookatripCard cardImage={shapeOne} cardTitle="Choose Destination" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
                <BookatripCard cardImage={shapeTwo} cardTitle="Make Payment" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
                <BookatripCard cardImage={shapeThree} cardTitle="Reach Airport on Selected Date" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1">
            <div className="book-a-trip-right">
              <img src={mainImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookatrip