import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  margin: 0 auto;
  padding: 14px 56px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  text-transform: uppercase;
  color: #373737;
  border-radius: 10.31px;
  border: none;
  box-shadow: ${(props) =>
    props.text === "Load more"
      ? "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
      : "0px 3.44px rgba(0, 0, 0, 0.25)"};
  background-color: ${(props) => {
    switch (props.text) {
      case "Load more":
        return "#f1c232";
      case "Follow":
        return "ebd8ff";
      default:
        return "#5CD3A8";
    }
  }};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${(props) =>
      props.text === "Load more" ? "#e7bb44" : "rgb(86, 166, 141);"};
  }

  :active {
    background-color: ${(props) =>
      props.text === "Load more" ? "#e7bb44" : "rgb(86, 166, 141);"};
  }
`;
