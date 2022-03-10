import React from "react";
import styled from "styled-components";
import "./Logo";

// const LogoWrapper = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const LogoImg = styled.div`
//     width: 29px;
//     height: 29px;
//     img {
//         width: 100%;
//         height: 100%;
//     }
// `;

// const LogoText = styled.h2`
//     font-size: 16px;
//     margin: 0;
//     margin-left: 4px;
//     color: #222;
//     font-weight: 500;
//     font-family: system-ui;
// `;

export function Logo() {
    return (
        <div className="LogoWrapper">
            <h2 className="LogoText">ToPrice</h2>
        </div>
    );
}
