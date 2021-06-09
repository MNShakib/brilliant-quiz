import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";

const Nav = () => {
  return (
    <StyledNav>
      <Container>
        <img src={logo} alt="logo" />
        <a href="https://brilliant.org/practice/warmup-puzzles-6/?p=1">
          START TRIAL
        </a>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  min-height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #ecedef;
  z-index: 100;
  img {
    width: 174px;
    height: auto;
    margin-top: 5px;
  }
  a {
    border: 1px solid #b6bec7;
    right: auto;
    position: relative;
    display: inline-block;
    font-family: "Soleil", Arial, sans-serif;
    line-height: 1.6em;
    text-align: center;
    cursor: pointer;
    outline: none;
    width: 150px;
    height: 33px;
    padding: 7px 0;
    margin-right: 25px;
    border-color: #07a17b;
    border-radius: 6px;
    color: #07a17b;
    text-transform: uppercase;
    background: transparent;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.2em;
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export default Nav;
