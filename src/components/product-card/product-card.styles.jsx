import styled from "styled-components";

export const ProductCartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    position: relative;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: 80%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    button {
        width: 70%;
        opacity: 0.7;
        position: absolute;
        top: 220px;
        display: none;
    }

    &:hover {
        img {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
            justify-content: center;
        }
    }

    @media (min-width: 768px) {
        height: 350px;

        img {
            height: 85%;
        }

        button {
            width: 80%;
            top: 255px;
        }
    }

    @media (min-width: 1024px) {
        height: 400px;

        img {
            height: 90%;
        }

        button {
            width: 85%;
            top: 275px;
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 0 10px;

    @media (min-width: 768px) {
        font-size: 18px;
        padding: 0 15px;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
        padding: 0 20px;
    }
`;

export const Name = styled.span`
    width: 80%;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        width: 90%;
        margin-bottom: 15px;
    }
`;

export const Price = styled.span`
    width: 20%;

    @media (min-width: 768px) {
        width: 10%;
    }
`;
