// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
Cypress.Commands.add('checkoutfunction',(CountryName)=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.xpath("//button[text()='ADD TO CART']").eq(4).click()
    cy.xpath("//button[text()='ADD TO CART']").eq(5).click();
    cy.xpath("//button[text()='ADD TO CART']").eq(10).click();
    cy.get('img[alt="Cart"]').click();
    cy.xpath("//button[text()='PROCEED TO CHECKOUT']").click();
    cy.xpath("//button[text()='Place Order']").click();
    cy.get('select').within(() => {
  cy.get('option:disabled').invoke('removeAttr', 'disabled');
});

cy.get('select').select(CountryName); // Replace with actual visible text or value
cy.get('[type="checkbox"]').check();
cy.xpath("//button[text()='Proceed']").click();
cy.get(".wrapperTwo").contains("Thank you");
cy.url().should('include','/seleniumPractise/#/')

})
