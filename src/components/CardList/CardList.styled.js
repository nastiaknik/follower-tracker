import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  text-decoration: none;
  list-style: none;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  gap: 30px;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    gap: 30px;
  }
`;

export const Container = styled.div`
  margin-bottom: 30px;
`;
