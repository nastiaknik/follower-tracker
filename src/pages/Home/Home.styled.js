import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  width: fit-content;
  padding: 14px 56px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  text-transform: uppercase;
  color: #373737;
  border-radius: 10.31px;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #f1c232;
  text-decoration: none;
  cursor: pointer;
  margin: 20px auto;
  display: block;

  :hover,
  :focus {
    background-color: #e7bb44;
  }

  :active {
    background-color: #e7bb44;
  }
`;

export const Container = styled.div``;
