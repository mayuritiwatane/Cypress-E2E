import { loginpage } from "../../pages/loginPage";
const loginObj = new loginpage();

describe('verify the login functionality', function () {
  beforeEach(function () {
    // Load fixture and generate unique email
    cy.fixture('register').then((data) => {
      const random = Math.floor(Math.random() * 10000);
      const uniqueEmail = `mayuri.tiwatane+${random}@example.com`;
      data.email = uniqueEmail
      this.userData = data;
    });
  });

  it('verify user should be login successfully', function () {
    loginObj.openURL();
    loginObj.enteremail(this.userData.loginemail); // ✅ Corrected access
    loginObj.enterpassword(this.userData.loginpassword);
    loginObj.enterlogin();
  });
    
  it('verify user should be able to forgotten Password', function () {
    loginObj.openURL();
    loginObj.enteremail(this.userData.loginemail); // ✅ Corrected access
    loginObj.enterforgotPassword();
    
  });
  
  it('verify user should be able to click continue button', function () {
    loginObj.openURL();
    loginObj.entercontinue();
    
    
  });
   it('verify user should be able to ', function () {
    loginObj.openURL();
    loginObj.entercontinue();
    
    
  });

});
