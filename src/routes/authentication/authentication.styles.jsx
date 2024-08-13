import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 90%;
    max-width: 900px;
    justify-content: space-between;
    margin: 30px auto;
    gap: 10px;

    @media (min-width: 768px) {
        width: 80%;
    }

    @media (min-width: 1024px) {
        width: 70%;
    }
`;
