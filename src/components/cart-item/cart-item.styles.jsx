import styled from "styled-components";

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 70px;
    margin-bottom: 12px;

    img {
        width: 25%;
    }

    @media (min-width: 768px) {
        height: 80px;
        margin-bottom: 15px;

        img {
            width: 30%;
        }
    }

    @media (min-width: 1024px) {
        height: 90px;
        margin-bottom: 15px;

        img {
            width: 30%;
        }
    }
`;

export const ItemDetails = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px 15px;

    span {
        font-size: 14px;
    }

    @media (min-width: 768px) {
        width: 70%;
        padding: 10px 20px;

        span {
            font-size: 16px;
        }
    }

    @media (min-width: 1024px) {
        padding: 12px 25px;

        span {
            font-size: 18px;
        }
    }
`;
