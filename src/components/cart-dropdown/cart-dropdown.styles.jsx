import styled from "styled-components";

import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 90%;
    max-width: 270px;
    height: 320px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 10px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
    }

    @media (min-width: 768px) {
        width: 280px;
        height: 340px;
        padding: 20px;
        right: 30px;
    }

    @media (min-width: 1024px) {
        width: 270px;
        height: 340px;
        padding: 20px;
        right: 40px;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 16px;
    margin: 30px auto;

    @media (min-width: 768px) {
        font-size: 18px;
        margin: 50px auto;
    }
`;

export const CartItems = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    overflow: auto;

    @media (min-width: 768px) {
        height: 240px;
    }
`;
