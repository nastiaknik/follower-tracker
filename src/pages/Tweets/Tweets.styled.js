import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

export const StyledArrowIcon = styled(IoMdArrowBack)`
  font-size: 25px;
  color: #5736a3;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: baseline;
  justify-content: left;
  padding: 5px;
  margin: 0;
  text-align: start;
  background-color: #f1c232;
  border-radius: 50%;

  :hover {
    color: #2b278c;
    background-color: #e7bb44;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 15px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  padding: 0;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 30px;
  align-items: center;

  @media screen and (max-width: 1199px) {
    margin: 20px 20px 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 30px;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: 1199px) {
    margin: 20px 20px 0;
  }
`;
