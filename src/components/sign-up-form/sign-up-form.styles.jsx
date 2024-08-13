import styled from "styled-components";

export const SignUpContainer = styled.div`
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
