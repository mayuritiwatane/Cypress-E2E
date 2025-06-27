export class contactUs {
    webLoacator = {
        firstName: '#input-name',
        email: '#input-email',
        inquiry: "//label[text()='Enquiry']"

    }
    openURL() {
        cy.visit(Cypress.env('contactUsURL'))

    }
    enterfirstName(Fname) {
        cy.get(this.webLoacator.firstName).type(Fname)
    }
    enteremail(emailID) {
        cy.get(this.webLoacator.email).type(emailID)
    }
    enterinquiry(inq) {
        cy.xpath(this.webLoacator.inquiry).type(inq)
    }

}