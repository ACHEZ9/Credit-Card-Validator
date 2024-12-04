import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditCardService {
  validateCardNumber(cardNumber: string): boolean {
    return cardNumber.length === 5;
  }
}
