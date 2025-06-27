export class forgotPassword {
    weblocator = {

        email: '#input-email',
        backButton: "//a[text()='Back']",
        continue: '[type="submit"]',
        Account: "//a[text()='Account']",
        Validatemsg : "//div[@class='alert alert-success alert-dismissible']"


    }
    openURL() {
        cy.visit(Cypress.env('forgotPasswordURL'))
    }
    enterloginemail(login) {
        cy.get(this.weblocator.email).type(login)
    }
   
    entercontinue() {
        cy.get(this.weblocator.continue).click()
    }
     enterbackButton() {
        cy.xpath(this.weblocator.backButton).click()
    }
    entereAccount() {
        cy.xpath(this.weblocator.Account).click()
    }
    enterValidatemsg(){
        cy.xpath(this.weblocator.Validatemsg).should('have.text',' An email with a confirmation link has been sent your email address.')
    }


}