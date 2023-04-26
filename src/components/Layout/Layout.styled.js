import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  min-height: 100vh;
  padding-bottom: 24px;
  text-align: center;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 320px) {
    min-width: 320px;
    padding-right: 10px;
    padding-left: 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1199px;
    padding-right: 5px;
    padding-left: 5px;
  }

  @media screen and (min-width: 800px) and (max-width: 1199px) {
    max-width: 800px;
    margin: 0 auto;
    padding-right: 5px;
    padding-left: 5px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding-right: 60px;
    padding-left: 60px;
  }
`;

export const Main = styled.main`
  padding-top: 70px;
  width: 100%;
  margin: 0 auto;
`;
