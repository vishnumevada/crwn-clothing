import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
    top: -18px;
    font-size: 14px;
    color: ${mainColor};
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 15px;
    transition: 300ms ease all;
    ${({ shrink }) => shrink && shrinkLabelStyles};

    @media (min-width: 768px) {
        font-size: 14px;
        top: 6px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
        top: 6px;
    }
`;

export const Input = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 16px;
    padding: 12px 12px 12px 6px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 20px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ ${FormInputLabel} {
        ${shrinkLabelStyles};
    }

    @media (min-width: 768px) {
        font-size: 18px;
        padding: 14px 14px 14px 8px;
        margin: 25px 0;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
        padding: 16px 16px 16px 10px;
        margin: 30px 0;
    }
`;

export const Group = styled.div`
    position: relative;
    margin: 35px 0;

    @media (min-width: 768px) {
        margin: 40px 0;
    }

    @media (min-width: 1024px) {
        margin: 45px 0;
    }

    input[type="password"] {
        letter-spacing: 0.3em;
    }
`;
