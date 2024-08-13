import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 120px;
    width: auto;
    height: 40px;
    letter-spacing: 0.5px;
    line-height: 40px;
    padding: 0 20px;
    font-size: 14px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    @media (min-width: 768px) {
        min-width: 140px;
        height: 45px;
        line-height: 45px;
        padding: 0 25px;
        font-size: 15px;
    }

    @media (min-width: 1024px) {
        min-width: 165px;
        height: 50px;
        line-height: 50px;
        padding: 0 30px;
        font-size: 15px;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;
