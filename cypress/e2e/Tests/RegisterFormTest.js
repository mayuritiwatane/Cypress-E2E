import { RegisterForm } from "../../pages/RegisterFormPage";
const RegisterFormObj = new RegisterForm();

describe('verify registerform', () => {
  let userdata;

  beforeEach(() => {
    cy.fixture('Registerform').then((data) => {
      const timestamp = Date.now();
      data.email = `user+${timestamp}@example.com`;
      userdata = data;
    });
  });

  const isFirefox = Cypress.browser.name === 'firefox';

  (isFirefox ? it.skip : it)('verify user is able fill all required data', () => {
    RegisterFormObj.openurl();
    cy.wait(3000);
    RegisterFormObj.uploadFile();
    RegisterFormObj.enterFirstname(userdata.Firstname);
    RegisterFormObj.enterLastname(userdata.Lastname);
    RegisterFormObj.enterAddress(userdata.Address);
    RegisterFormObj.enterEmailaddress(userdata.Emailaddress);
    RegisterFormObj.enterPhoneno(userdata.Phone);
    RegisterFormObj.SelectGender();
    RegisterFormObj.selectHobbies();
    cy.wait(3000);
    RegisterFormObj.enterLanguages();
    RegisterFormObj.SelectLanguage();
    RegisterFormObj.SelectSkills();
    RegisterFormObj.SelectCountry();
    cy.wait(2000);
    RegisterFormObj.SelectYear();
    RegisterFormObj.Selectmonth();
    RegisterFormObj.SelectDay();
    RegisterFormObj.enterPassword(userdata.password);
    RegisterFormObj.enterConfirmPassword(userdata.confirmPassword);
    RegisterFormObj.SelectSubmit();
  });
});
