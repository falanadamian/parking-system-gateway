import { getGreeting } from '../support/app.po';

describe('parking-payments-system', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to parking-payments-system!');
  });
});
