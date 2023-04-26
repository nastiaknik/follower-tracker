import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "components/Header/Header";
import { Container, Main } from "./Layout.styled";
import Loader from "components/Skeleton";

export const Layout = () => {
  const location = useLocation();

  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<Loader page={location.pathname} />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
