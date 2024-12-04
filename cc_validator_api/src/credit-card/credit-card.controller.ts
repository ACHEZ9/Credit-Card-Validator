import { Body, Controller, Post } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { ValidateCreditCardRequestDto } from './dto/validate-credit-card-request.dto';
import { ValidateCreditCardResponseDto } from './dto/validate-credit-card-response.dto';

@Controller('credit-card')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Post('validate')
  validate(
    @Body() validateCreditCardRequest: ValidateCreditCardRequestDto,
  ): ValidateCreditCardResponseDto {
    const cardNumber = validateCreditCardRequest.cardNumber;

    const isValid = this.creditCardService.validateCardNumber(cardNumber);

    const message = `Credit Card Number is ${isValid ? 'Valid' : 'Not Valid'}`;

    return {
      cardNumber,
      isValid,
      message,
    };
  }
}
