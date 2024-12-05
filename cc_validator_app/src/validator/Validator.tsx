import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import Header from "./components/Header";
import ResultsDisplay from "./components/ResultsDisplay";
import { validateCreditCardNumber } from "./data/service";
import { ValidateCreditCardResponse } from "./data/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Validator = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResponse, setValidationResponse] =
    useState<ValidateCreditCardResponse>();

  const onClickValidate = async () => {
    setIsValidating(true);
    const result = await validateCreditCardNumber(cardNumber);
    setValidationResponse(result);
    setIsValidating(false);
  };

  return (
    <Container>
      <Header />
      <InputContainer>
        <Input
          value={cardNumber}
          onChange={({ target }) => setCardNumber(target.value)}
          placeholder="Enter Credit Card Number"
          disabled={isValidating}
        />
        <Button
          onClick={onClickValidate}
          disabled={isValidating || !cardNumber}
        >
          {isValidating ? "Validating..." : "Validate"}
        </Button>
      </InputContainer>
      {validationResponse && <ResultsDisplay result={validationResponse} />}
    </Container>
  );
};

export default Validator;
