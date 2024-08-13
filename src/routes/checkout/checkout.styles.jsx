import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media (min-width: 768px) {
        width: 80%;
    }

    @media (min-width: 1024px) {
        width: 70%;
    }
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    @media (min-width: 768px) {
        padding: 20px 0;
    }
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 30%;

    &:last-child {
        width: 15%;
    }

    @media (min-width: 768px) {
        width: 25%;

        &:last-child {
            width: 10%;
        }
    }

    @media (min-width: 1024px) {
        width: 23%;

        &:last-child {
            width: 8%;
        }
    }
`;

export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 28px;

    @media (min-width: 768px) {
        font-size: 32px;
    }

    @media (min-width: 1024px) {
        font-size: 36px;
    }
`;
