import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

export const ProfileInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-right: 10px;
  margin-left: 10px;
`;

export const StyledArrowIcon = styled(IoMdArrowBack)`
  font-size: 25px;
  color: #5736a3;
`;

export const StyledNavLink = styled(NavLink)`
  width: 25px;
  height: 25px;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 30px;
  align-items: center;

  @media screen and (max-width: 1199px) {
    margin: 20px 0;
  }
`;

export const ProfilePicture = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProfileName = styled.div`
  font-size: 24px;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const ProfileUsername = styled.div`
  font-size: 20px;
  margin-top: 8px;
  color: #808080;
`;

export const ProfileStats = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  margin: 0 10px;
`;

export const ProfileStatItem = styled.p`
  font-size: 20px;
  padding: 10px 0;
  margin: 0;
`;

export const ProfileColor = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: start;
  align-items: center;

  span {
    margin-left: 5px;
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.color};
  }
`;
