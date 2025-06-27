import { forgotPassword } from "../../pages/forgotPasswordPage"
const forgotObj = new forgotPassword();

describe('verify user is able to change password',()=>{
    let userData ;
    beforeEach (()=>{
       cy.fixture ('register').then((data)=>{
        //used for generating the random email id for each test
        const timestamp = Date.now();
        data.email=`user+${timestamp}@example.com`;
        //used for fixture intialization
        userData=data;
    })
}) 
    
    it('verify user is able to use forgot password option',()=>{
       forgotObj.openURL();
       forgotObj.enterloginemail(userData.loginemail);
       forgotObj.entercontinue();
       forgotObj.enterValidatemsg();

      

       




    })
        it('verify user is able to use backButton option',()=>{
       forgotObj.openURL();
       forgotObj.enterbackButton();
       cy.url().should('include',"https://naveenautomationlabs.com/opencart/index.php?route=account/login")

       




    })

})