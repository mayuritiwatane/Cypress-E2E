import { contactUs } from "../../pages/contactUsPage";
const contactUsobj = new contactUs();

describe('verify contactUs page', () => {
    let userData;

    beforeEach(() => {
        cy.fixture('register').then((data) => {
            const timestamp = Date.now();
            data.email = `user+${timestamp}@example.com`;
            userData = data;

        })
    })

    it('verify user is able to use contactUs page', () => {
        contactUsobj.openURL();
        contactUsobj.enterfirstName(userData.firstName);
        contactUsobj.enteremail(userData.email);
        contactUsobj.enterinquiry(userData.inquirymassage);



    })




})