import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import { Container, Main } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
