import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { IoMdArrowBack } from "react-icons/io";

export const StyledArrowIcon = styled(IoMdArrowBack)`
  display: flex;
  align-items: baseline;
  justify-content: left;
  padding: 5px;
  font-size: 25px;
  background-color: #f1c232;
  color: #5736a3;
  border-radius: 50%;

  :hover {
    color: #2b278c;
    background-color: #e7bb44;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-align: start;
  margin: 0;
`;

export const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  padding: 0;
  /*  margin: 0 auto; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
`;
