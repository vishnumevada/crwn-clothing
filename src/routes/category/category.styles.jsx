import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    row-gap: 30px;

    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 15px;
        row-gap: 40px;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 45px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
        row-gap: 50px;
    }
`;

export const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 25px;
    }

    @media (min-width: 1024px) {
        font-size: 38px;
        margin-bottom: 30px;
    }
`;
