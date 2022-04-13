import React, { useState } from 'react';
import Quag from './Quagga';
import { Link } from 'react-router-dom';

function Scanner(props) {
  const [result, setResult] = useState();

  const _onDetected = result => {
    setResult(result);
    props.setBarcode(result);
    props.showProduct();
  }

    return (
      <div>
        <h1>======= {result} ======</h1>
        <br></br> 
        <Link to='/'>GOOOO</Link>
        <br></br> 
        <Quag onDetected={_onDetected} />
      </div>
    );
}

export default Scanner;