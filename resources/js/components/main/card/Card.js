import React from "react";
import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{props.market_id}</h3>
                <div className="bottom-area">
                    <h5 href="#" class="card-link">
                        {props.price}
                    </h5>
                    <a href="#" className="btn btn-warning">
                        More
                    </a>
                </div>
            </div>
        </div>
    );
}
