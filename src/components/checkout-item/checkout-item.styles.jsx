import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 80px;
    border-bottom: 1px solid darkgrey;
    padding: 10px 0;
    font-size: 18px;
    align-items: center;

    @media (min-width: 768px) {
        min-height: 100px;
        padding: 15px 0;
        font-size: 20px;
    }

    @media (min-width: 1024px) {
        min-height: 120px;
        padding: 20px 0;
        font-size: 22px;
    }
`;

export const ImageContainer = styled.div`
    width: 22%;
    padding-right: 40px;

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 768px) {
        width: 23%;
        padding-right: 60px;
    }

    @media (min-width: 1024px) {
        width: 23%;
        padding-right: 80px;
    }
`;

export const BaseSpan = styled.span`
    width: 22%;
    font-size: 16px;

    @media (min-width: 768px) {
        width: 23%;
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        width: 23%;
        font-size: 20px;
    }
`;

export const Quantity = styled(BaseSpan)`
    display: flex;
`;

export const Arrow = styled.div`
    cursor: pointer;
`;

export const Value = styled.span`
    margin: 2px 8px;

    @media (min-width: 768px) {
        margin: 2px 10px;
    }

    @media (min-width: 1024px) {
        margin: 2px 12px;
    }
`;

export const RemoveButton = styled.div`
    padding-left: 8px;
    cursor: pointer;

    @media (min-width: 768px) {
        padding-left: 10px;
    }

    @media (min-width: 1024px) {
        padding-left: 12px;
    }
`;
