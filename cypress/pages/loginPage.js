export class loginpage {
    webLocators = {
        email: '#input-email',
        password: '#input-password',
        continue: "//a[text()='Continue']",
        forgotPassword: "//a[text()='Forgotten Password']",
        login: 'input[type="submit"]',


    }
    openURL() {
        cy.visit(Cypress.env('LOGINURL'))

    }
    enteremail(emailID) {
        cy.get(this.webLocators.email).type(emailID)
    }
    enterpassword(Pass) {
        cy.get(this.webLocators.password).type(Pass)
    }
    entercontinue() {
        cy.xpath(this.webLocators.continue).click()
    }
    enterforgotPassword() {
        cy.xpath(this.webLocators.forgotPassword).first().click()
    }
    enterlogin() {
        cy.get(this.webLocators.login).click()
    }




}