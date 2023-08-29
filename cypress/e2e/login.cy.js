describe('Test', () => {
    
  it('Register - fail', () => {
      cy.visit('https://preprod.backmarket.fr/register')
      cy.get('button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)').click()
      cy.get('#firstName').type('Adrin')
      cy.get('#lastName').type('Marculesu')
      cy.get('#signup-email').type('adrianmarculesci.ig@gmail.com')
      cy.get('#signup-password').type('cypress3')
      cy.get('div.flex:nth-child(7) > button:nth-child(1)').click()
      cy.get('#signup-password').should('have.css',"color","rgb(18, 18, 18)");  });
  it('Register-success', () => {
    cy.visit('https://preprod.backmarket.fr/register')
      cy.get('button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)').click()
      cy.get('#firstName').type('Adrin')
      cy.get('#lastName').type('Marculesu')
      cy.get('#signup-email').type('adrianmarculescu.ig@gmail.com')
      cy.get('#signup-password').type('Cypress3')
      cy.get('div.flex:nth-child(7) > button:nth-child(1)').click()
      cy.url().should('eq','https://preprod.backmarket.fr/fr-fr/register')  
  });
  it('Login - fail', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)').click()
    cy.get('#signin-email').type('adrianmarculesci.ig@gmail.com')
    cy.get('#signin-password').type('cypress3')
    cy.get('div.mt-7:nth-child(4) > button:nth-child(1)').click()
    cy.get('.text-red-700').should('be.visible');  });
it('Login - success', () => {
  cy.visit('https://preprod.backmarket.fr/register')
    cy.get('button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)').click()
    cy.get('#signin-email').type('adrianmarculescu.ig@gmail.com')
    cy.get('#signin-password').type('Cypress3')
    cy.get('div.mt-7:nth-child(4) > button:nth-child(1)').click()
    cy.url().should('eq','https://preprod.backmarket.fr/fr-fr/dashboard/orders')  
});
});
