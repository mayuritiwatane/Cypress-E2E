export class registerPage{
    webLocators ={
        firstName : '#input-firstname',
        lastName : '#input-lastname',
        emaill : '#input-email',
        telephone : '#input-telephone',
        password : '#input-password',
        confirmPassword : '#input-confirm',
        privacy: 'input[type="checkbox"]',
        continue : 'input[type="submit"]',
        registrationSuccess:"//h1[text()='Your Account Has Been Created!']"

    }
    openURL(){
        cy.visit(Cypress.env('RegisterURL'))
    }
    enterfirstName (Fname){
        cy.get(this.webLocators.firstName).type(Fname)
    }
    enterlastName (Lname){
        cy.get(this.webLocators.lastName).type(Lname)
    }
    enteremail (emailID){
        cy.get(this.webLocators.emaill).type(emailID)
    }
    entertelephone (Tele){
        cy.get(this.webLocators.telephone).type(Tele)
    }
    enterpassword (Pass){
        cy.get(this.webLocators.password).type(Pass)
    }
    enterconfirmPassword (Cpass){
        cy.get(this.webLocators.confirmPassword).type(Cpass)
    }
    enterprivacy (){
        cy.get(this.webLocators.privacy).check()
    }
    entercontinue (){
        cy.get(this.webLocators.continue).click()
    }
    registrationSuccessmsg (){
        cy.xpath(this.webLocators.registrationSuccess).should('have.text','Your Account Has Been Created!')
    }

        
    
    

 



}