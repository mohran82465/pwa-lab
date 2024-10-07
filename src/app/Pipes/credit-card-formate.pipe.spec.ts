import { CreditCardFormatePipe } from './credit-card-formate.pipe';

describe('CreditCardFormatePipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardFormatePipe();
    expect(pipe).toBeTruthy();
  });
});
