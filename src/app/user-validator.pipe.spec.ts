import { UserValidatorPipe } from './user-validator.pipe';

describe('UserValidatorPipe', () => {
  it('create an instance', () => {
    const pipe = new UserValidatorPipe();
    expect(pipe).toBeTruthy();
  });
});
