import React from "react";
import Burger from "./Burger";
import styled from "styled-components";

const Nav = styled.nav`
  max-width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <span>JSFWCA</span>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
