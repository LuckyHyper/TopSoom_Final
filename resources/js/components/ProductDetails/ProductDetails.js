import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../SearchBar/Search";
import "./ProductDetails";

export default function ProductDetails({ data }) {
    console.log(data);
    return (
        <div>
            <Navbar />
            <Search />
            {data != null &&
                data.map((element) => {
                    return (
                        <div
                            className="ProductContainer"
                            key={element.product_id}
                        >
                            <div className="Wrapper">
                                <div className="ImgContaine" r>
                                    <img
                                        className="Image"
                                        src="https://image.shutterstock.com/image-vector/blueberry-jam-package-design-glass-260nw-744584260.jpg"
                                    />
                                </div>
                                <div className="InfoContainer">
                                    <h1 className="Title">
                                        {element.market_id}
                                    </h1>
                                    <br />
                                    <span className="Descr"></span>
                                    <br />
                                    <span className="Price">
                                        {element.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
