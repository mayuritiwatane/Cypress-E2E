export class searchFunctionalityPage {
    webLoacators={
        search:'[name="search"]',
        searchButton:'//button[@class="btn btn-default btn-lg"]',
        verifyname:"//a[text()='iPhone']"
    }
    openURL(){
        cy.visit(Cypress.env('SERCHFUNCTIONALITYURL'))
    }
    enterinsearch(model){
        cy.get(this.webLoacators.search).type(model)
    }
    enterinsearchButton(){
        cy.xpath(this.webLoacators.searchButton).click()
    }
    verifynameofproduct(){
        cy.xpath(this.webLoacators.verifyname).should('have.text','iPhone')
    }
}