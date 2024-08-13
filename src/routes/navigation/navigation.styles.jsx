import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        height: 70px;
        padding: 0 30px;
        margin-bottom: 25px;
    }

    @media (min-width: 1024px) {
        height: 80px;
        padding: 0 40px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 60px;
    padding: 15px;

    @media (min-width: 768px) {
        width: 70px;
        padding: 20px;
    }

    @media (min-width: 1024px) {
        width: 80px;
        padding: 25px;
    }
`;

export const NavLinks = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: 768px) {
        width: 60%;
    }

    @media (min-width: 1024px) {
        width: 50%;
    }
`;

export const NavLink = styled(Link)`
    padding: 10px 12px;
    cursor: pointer;
    font-size: 14px;

    @media (min-width: 768px) {
        padding: 10px 15px;
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        padding: 10px 18px;
        font-size: 18px;
    }
`;
