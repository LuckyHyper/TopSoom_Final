import React from 'react';
import Quag from './Quagga';
import './Scanner.css';
import { useNavigate } from 'react-router-dom';

function Scanner() {
  const navigate= useNavigate();
  const _onDetected = result => {
    navigate('/product-list',{state:{barcode: result }});
  }

    return (
      <div className='scanner'>
        <Quag onDetected={_onDetected} />
      </div>
    );
}

export default Scanner;