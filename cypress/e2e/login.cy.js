/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */
describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Sign In$/)
      .should('be.visible');
  });
  it('should display alert when email is empty', () => {
    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });
  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('usertest@gmail.com');

    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('usertest@gmail.com');
    cy.get('input[placeholder="Password"').type('usertestpassword');

    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });
  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('akuntest@gmail.com');
    cy.get('input[placeholder="Password"]').type('akuntest');

    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.wait(2000);

    cy.get('div.max-w-screen-sm', { timeout: 10000 }).should('be.visible');
    cy.get('.sidebar').should('be.visible');
    cy.get('.sidebar-title span').contains('ThreadTalk').should('be.visible');
    cy.get('.sidebar-footer button').contains('Logout').should('be.visible');
  });
});
