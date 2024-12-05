import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

const StyledButton = styled.button``;

const Button = ({ children, ...buttonProps }: PropsWithChildren<Props>) => {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

export default Button;
