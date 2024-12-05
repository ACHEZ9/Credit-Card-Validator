import { Test, TestingModule } from '@nestjs/testing';
import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditCardService],
    }).compile();

    service = module.get<CreditCardService>(CreditCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateCardNumber', () => {
    it('should return true for valid credit cards', () => {
      const validCardNumbers = [
        '4111111111111111',
        '5555555555554444',
        '4111 1111 1111 1111',
      ];

      validCardNumbers.forEach((number) => {
        expect(service.validateCardNumber(number)).toBeTruthy();
      });
    });

    it('should return false for invalid credit cards', () => {
      const invalidCardNumbers = [
        '4111111111111112',
        '5555555555554445',
        'asdf',
        '4111111111111111asdf',
      ];

      invalidCardNumbers.forEach((number) => {
        expect(service.validateCardNumber(number)).toBeFalsy();
      });
    });
  });
});
