import React from 'react';
import './Clients.css';
import alitalia from '../../Assests/Images/Clients/alitalia.svg';
import axon from '../../Assests/Images/Clients/axon.svg';
import expedia from '../../Assests/Images/Clients/expedia.svg';
import jetstar from '../../Assests/Images/Clients/jetstar.svg';
import qantas from '../../Assests/Images/Clients/qantas.svg';

const Clients = () => {
  return (
    <div className='clients'>
      <div className="container">
        <div className=" brands d-flex justify-content-center align-items-baseline">
          <div className="brand"><img src={axon} alt="" /></div>
          <div className="brand"><img src={jetstar} alt="" /></div>
          <div className="brand"><img src={expedia} alt="" /></div>
          <div className="brand"><img src={qantas} alt="" /></div>
          <div className="brand"><img src={alitalia} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Clients