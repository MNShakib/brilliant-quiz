import React from "react";
//Navbar
import Nav from "../components/nav";
//styled Components
import styled from "styled-components";

const Main = () => {
  return (
    <Header className="as">
      <Nav />
    </Header>
  );
};
const Header = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Main;
