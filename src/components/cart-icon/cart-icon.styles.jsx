import styled from "styled-components";

export const CartIconContainer = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
    }

    @media (min-width: 768px) {
        width: 45px;
        height: 45px;

        svg {
            width: 24px;
            height: 24px;
        }
    }

    @media (min-width: 1024px) {
        width: 50px;
        height: 50px;

        svg {
            width: 28px;
            height: 28px;
        }
    }
`;

export const ItemCount = styled.span`
    position: absolute;
    font-size: 9px;
    font-weight: bold;
    bottom: 10px;

    @media (min-width: 768px) {
        font-size: 10px;
        bottom: 13px;
    }

    @media (min-width: 1024px) {
        font-size: 11px;
        bottom: 15px;
    }
`;
