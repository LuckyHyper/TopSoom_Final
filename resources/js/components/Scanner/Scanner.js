import React from 'react';
import Quag from './Quagga';
import { useNavigate, Link } from 'react-router-dom';

function Scanner(props) {
  const navigate= useNavigate();
  const _onDetected = result => {
    navigate('/price-list',{state:{barcode: result }});
  }

    return (
      <div>
        <Link to='/'>GOOOO</Link>
        <br></br> 
        <Quag onDetected={_onDetected} />
      </div>
    );
}

export default Scanner;