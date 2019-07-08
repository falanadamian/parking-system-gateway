import { getGreeting } from '../support/app.po';

describe('parking-ticketing-system', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to parking-ticketing-system!');
  });
});
