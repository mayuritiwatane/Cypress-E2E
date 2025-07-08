export class RegisterForm {
  webLocators = {
    Firstname: '[placeholder="First Name"]',
    Lastname: '[placeholder="Last Name"]',
    Address: '//textarea[@ng-model="Adress"]',
    Emailaddress: '[type="email"]',
    Phone: '[type="tel"]',
    Gender: '//input[@value="FeMale"]',
    Hobbies: '#checkbox2',
    Languagesdropdown: '#msdd',
    SelectLanguage: "//a[text()='Thai']",
    Skillsdropdown: '#Skills',
    Skills: "//option[text()='Art Design']",
    Country: '#countries',
    SelectCountry: '#select2-country-container',
    yeardropdown: '//select[@placeholder="Year"]',
    year: "//option[text()='2000']",
    monthdropdown: '//select[@placeholder="Month"]',
    month: "//option[text()='March']",
    daydropdown: '#daybox',
    day: "//option[text()='9']",
    Password: '#firstpassword',
    ConfirmPassword: "#secondpassword",
    Submit: "#submitbtn"
  }
  openurl() {
    cy.visit(Cypress.env('RegisterFormURL'))
  }
  enterFirstname(fname) {
    cy.get(this.webLocators.Firstname).type(fname)
  }
  enterLastname(lname) {
    cy.get(this.webLocators.Lastname).type(lname)
  }
  enterAddress(addres) {
    cy.xpath(this.webLocators.Address).type(addres)
  }
  enterEmailaddress(ID) {
    cy.get(this.webLocators.Emailaddress).type(ID)
  }
  enterPhoneno(phn) {
    cy.get(this.webLocators.Phone).type(phn)
  }
  SelectGender() {
    cy.xpath(this.webLocators.Gender).click();
  }
  selectHobbies() {
    cy.get(this.webLocators.Hobbies).click();
  }
  SelectLanguage() {
    cy.xpath(this.webLocators.SelectLanguage).click()
  }
  enterLanguages() {
    cy.get(this.webLocators.Languagesdropdown).click();
  }

  SelectSkills() {
    cy.get(this.webLocators.Skillsdropdown).select('Adobe InDesign', { force: true });
  }

  SelectCountry() {
    cy.get(this.webLocators.Country).invoke('removeAttr', 'required');
  }
  SelectYear() {
    cy.xpath(this.webLocators.yeardropdown).select('2000', { force: true });
  }

  Selectmonth() {
    cy.xpath(this.webLocators.monthdropdown).select('March', { force: true })
  }

  SelectDay() {
    cy.get(this.webLocators.daydropdown).select('9', { force: true });
  }

  enterPassword(Pass) {
    cy.get(this.webLocators.Password).type(Pass)
  }
  enterConfirmPassword(cpass) {
    cy.get(this.webLocators.ConfirmPassword).type(cpass)
  }
  SelectSubmit() {
    cy.get(this.webLocators.Submit).click({ force: true })
  }

}