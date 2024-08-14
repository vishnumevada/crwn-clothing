import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageurl }) => `url(${imageurl})`};
`;

export const Body = styled.div`
    height: 70px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 18px;
        color: #4a4a4a;
        text-transform: uppercase;
    }

    p {
        font-weight: lighter;
        font-size: 14px;
    }

    @media (min-width: 768px) {
        height: 80px;
        padding: 0 25px;

        h2 {
            font-size: 20px;
        }

        p {
            font-size: 14px;
        }
    }

    @media (min-width: 1024px) {
        height: 90px;

        h2 {
            font-size: 22px;
        }

        p {
            font-size: 16px;
        }
    }
`;

export const DirectoryItemContainer = styled.div`
    min-width: 100%;
    height: 180px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 0 15px;
    overflow: hidden;

    &:first-child {
        margin-right: 0;
    }

    &:last-child {
        margin-left: 0;
    }

    &:hover {
        cursor: pointer;

        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${Body} {
            opacity: 0.9;
        }
    }

    @media (min-width: 768px) {
        min-width: 45%;
        height: 200px;
        margin: 0 7.5px 15px;

        &:first-child {
            margin-right: 7.5px;
        }

        &:last-child {
            margin-left: 7.5px;
        }
    }

    @media (min-width: 1024px) {
        min-width: 30%;
        height: 240px;
        margin: 0 7.5px 15px;
    }
`;
