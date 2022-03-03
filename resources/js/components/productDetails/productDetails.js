import React from "react";
import Card from "../card/card";

import Navbar from "../navbar";
import Search from "../searchBar/Search";
import "./ProductDetails.css";
import styled from "styled-components";

const ProductContainer = styled.div`
    flex: 1;
    margin-left: 40px;
    margin-right: 40px;

    margin-top: 40px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

export default function ProductDetails(props) {
    return (
        <div>
            <Navbar />
            <Search />
            <ProductContainer>
                <Image src="" alt="image" />
                <Info>hqdqkbkzjqbdkjzbdkj</Info>
            </ProductContainer>
        </div>
    );
}
