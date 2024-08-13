import styled from "styled-components";

export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;

    @media (min-width: 768px) {
        gap: 15px;
    }

    @media (min-width: 1024px) {
        gap: 20px;
    }
`;
