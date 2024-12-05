export type ValidateCreditCardParams = {
  cardNumber: string;
};

export type ValidateCreditCardResponse = {
  cardNumber: string;
  isValid: boolean;
  message: string;
};
