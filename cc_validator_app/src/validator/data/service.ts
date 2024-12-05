import apiClient from "../../api/client";
import { ValidateCreditCardParams, ValidateCreditCardResponse } from "./types";

const validateCreditCardNumber = async (
  cardNumber: string
): Promise<ValidateCreditCardResponse> => {
  const params: ValidateCreditCardParams = { cardNumber };

  console.log(`Validating Credit Card Number: ${cardNumber}`);

  try {
    const response = await apiClient.post<ValidateCreditCardResponse>(
      "/credit-card/validate",
      params
    );

    return response.data;
  } catch (error) {
    console.error(`Error validating credit card`, error);

    return {
      cardNumber,
      isValid: false,
      message: "Error Validating Credit Card",
    };
  }
};

export { validateCreditCardNumber };
