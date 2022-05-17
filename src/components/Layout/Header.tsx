import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import Logo from "../../assets/icons/Logo";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
    background-color: #fff;
`;

const Header = () => (
    <StyledHeader>
        <Link to={'/'}>
            <Logo />
        </Link>
    </StyledHeader>
)

export default Header;