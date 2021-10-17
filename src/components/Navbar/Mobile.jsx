import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 40;
  li {
    padding: 18px 10px;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    a {
      color: #fff;
    }
  }
`;

const Mobile = ({ open }) => {
  const isLoggedin = localStorage.getItem("token");
  return (
    <Ul open={open}>
      <li>
        <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeStyle={{ fontWeight: "bold" }}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/favourites" activeStyle={{ fontWeight: "bold" }}>
          Favourites
        </NavLink>
      </li>
      {isLoggedin && (
        <li>
          <NavLink to="/admin" activeStyle={{ fontWeight: "bold" }}>
            Admin
          </NavLink>
        </li>
      )}
      {!isLoggedin && (
        <li>
          <NavLink to="/login" activeStyle={{ fontWeight: "bold" }}>
            Login
          </NavLink>
        </li>
      )}
    </Ul>
  );
};

export default Mobile;
