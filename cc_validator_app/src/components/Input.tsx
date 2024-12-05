import { InputHTMLAttributes } from "react";
import styled from "styled-components";

type Props = InputHTMLAttributes<HTMLInputElement> & {};

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  border: 1px solid gray;
  background-color: white;
  color: black;

  &:focus {
    outline: none;
    border-color: black;
  }
`;

const Input = ({ ...inputProps }: Props) => {
  return <StyledInput {...inputProps} />;
};

export default Input;
