import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 420px;
    margin: 0 auto;

    h2 {
        margin: 10px 0;
        font-size: 24px;

        @media (min-width: 768px) {
            font-size: 26px;
        }

        @media (min-width: 1024px) {
            font-size: 28px;
        }
    }

    @media (min-width: 768px) {
        width: 80%;
    }

    @media (min-width: 1024px) {
        width: 60%;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const SignUpLink = styled(Link)`
    font-size: 16px;
    cursor: pointer;
    color: blue;
`;
