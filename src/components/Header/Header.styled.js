import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 8px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: #56a68d;
  color: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1); */
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 10px;
  margin-left: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 550;
  font-size: 17px;
  text-align: start;
  text-decoration: none;
  color: #5736a3;
  border-radius: 20px;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    color 0, 2s ease-in-out;

  :hover,
  :focus {
    color: #5736a3;
  }

  &.active {
    color: white;
    background-color: #5736a3;

    :hover {
      opacity: 0.9;
    }
  }
`;

export const LogoNavLink = styled(NavLink)`
  display: block;
  margin-left: 15px;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  :hover,
  :focus {
    opacity: 0.8;
  }
`;
