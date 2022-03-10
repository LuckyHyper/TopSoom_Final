import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../SearchBar/Search";
import "./ProductDetails";

// const ProductContainer = styled.div`
//     height: 60px;
// `;
// const Wrapper = styled.div`
//     padding: 50px;
//     display: flex;
//     ${Mobile({ padding: "10px", flexDirection: "column" })}
// `;
// const ImgContainer = styled.div`
//     flex: 1;
// `;
// const Image = styled.img`
//     width: 90%;
//     height: 90vh;
//     object-fit: cover;
// `;
// const InfoContainer = styled.div`
//     flex: 1;
//     padding: 0px 50px;
// `;
// const Title = styled.h1`
//     font-weight: 200;
//     font-size: 50px;
//     font-family: cursive;
// `;
// const Price = styled.span`
//     font-weight: 100;
//     font-family: Georgia, serif;
// `;
// const Descr = styled.span`
//     font-weight: 100;
//     font-family: Georgia, serif;
// `;

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
