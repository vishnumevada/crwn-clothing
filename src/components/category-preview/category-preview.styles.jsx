import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled(Link)`
    font-size: 24px;
    margin-bottom: 20px;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: 28px;
        margin-bottom: 25px;
    }
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
    }
`;
