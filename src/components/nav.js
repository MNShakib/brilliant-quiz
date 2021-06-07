import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";

const Nav = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <ul>
        <li></li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  min-height: 10vh;
  background-color: black;
  img {
    width: 174px;
    height: 50px;
  }
`;

export default Nav;
