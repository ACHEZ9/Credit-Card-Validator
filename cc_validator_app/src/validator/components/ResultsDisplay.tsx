import styled, { css } from "styled-components";
import { ValidateCreditCardResponse } from "../data/types";

type Props = {
  result: ValidateCreditCardResponse;
};

const Container = styled.div``;

const ResultText = styled.p<{ $error: boolean }>`
  font-size: 1rem;
  color: green;

  ${({ $error }) =>
    $error &&
    css`
      color: red;
    `}
`;

const ResultsDisplay = ({ result }: Props) => {
  return (
    <Container>
      <ResultText $error={!result.isValid}>{result.message}</ResultText>
    </Container>
  );
};

export default ResultsDisplay;
