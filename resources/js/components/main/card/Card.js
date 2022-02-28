import React from "react";
import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.market_id}</h5>
                <div className="bottom-area">
                    <a href="#" class="card-link">
                        {props.price}
                    </a>
                    <a href="#" className="btn btn-primary">
                        More
                    </a>
                </div>
            </div>
        </div>
    );
}
