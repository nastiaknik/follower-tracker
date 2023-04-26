import { StyledNavLink } from "./NotFound.styled";
import Page404 from "../../assets/404-page.png";

const NotFound = () => {
  return (
    <>
      <img
        src={Page404}
        alt="404 error, you underestimate the power of dark side"
        width="548"
        height="372"
        style={{ display: "block", margin: "25px auto" }}
      />
      <StyledNavLink to="/">Go home</StyledNavLink>
    </>
  );
};

export default NotFound;
