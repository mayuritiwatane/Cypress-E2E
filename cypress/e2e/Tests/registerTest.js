import { registerPage } from "../../pages/registerPage";
const registerOb = new registerPage();

describe('verify the registration functionality', () => {
  let userData;
beforeEach(() => {
        cy.fixture('register').then((data) => {
            const timestamp = Date.now();
            data.email = `user+${timestamp}@example.com`;
            userData = data;

        })
    })



  it('verify user should be register successfully', function () {
    registerOb.openURL();
    registerOb.enterfirstName(userData.firstName);
    registerOb.enterlastName(userData.lastName);
    registerOb.enteremail(userData.email);
    registerOb.entertelephone(userData.telephone);
    registerOb.enterpassword(userData.password);
    registerOb.enterconfirmPassword(userData.confirmPassword);
    registerOb.enterprivacy();
    registerOb.entercontinue();
    registerOb.registrationSuccessmsg();
  });
});
