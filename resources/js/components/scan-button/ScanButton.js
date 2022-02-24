import React from 'react';
import './ScanButton.css';

export default function ScanButton(){
    return(
        <div className="scan-btn">
           <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">
              <span className="add-btn"></span>
           </a>
        </div>

    );
}