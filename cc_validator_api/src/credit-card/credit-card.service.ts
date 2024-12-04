import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditCardService {
  validateCardNumber(cardNumber: string): boolean {
    if (!cardNumber) {
      return false;
    }

    // Convert input to string and remove any non-digit characters
    const numString = cardNumber.replace(/\D/g, '');

    // If the string is empty after removing non-digits, return false
    if (numString.length === 0) {
      return false;
    }

    // Convert string to array of digits and reverse
    const digits = numString.split('').map(Number).reverse();

    // Perform Luhn algorithm calculation
    const sum = digits.reduce((acc, digit, index) => {
      // Every second digit (starting from the right) is doubled
      let processedDigit = index % 2 === 1 ? digit * 2 : digit;

      // If doubled digit is greater than 9, subtract 9
      processedDigit = processedDigit > 9 ? processedDigit - 9 : processedDigit;

      return acc + processedDigit;
    }, 0);

    // Number is valid if sum is divisible by 10
    return sum % 10 === 0;
  }
}
