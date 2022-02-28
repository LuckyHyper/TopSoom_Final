import React from 'react';
import './ScanButton.css';
import {Link} from 'react-router-dom';

export default function ScanButton(){
    return(
        <div className="scan-btn">
           <Link to="/scanner" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">
              <span className="add-btn"></span>
           </Link>
        </div>

    );
}