import { ReactComponent as Logo } from "../../assets/logo.svg";
import { StyledHeader, Nav, StyledNavLink, LogoNavLink } from "./Header.styled";

function Header() {
  return (
    <StyledHeader>
      <LogoNavLink to="/">
        <Logo width="80" height="55.7px" />
      </LogoNavLink>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/tweets">Tweets</StyledNavLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
