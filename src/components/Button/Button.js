import { StyledButton } from "./Button.styled";

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} text={text}>
      {text}
    </StyledButton>
  );
};
