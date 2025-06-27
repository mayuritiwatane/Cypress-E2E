import { searchFunctionalityPage } from "../../pages/searchFunctionalityPage";
const searchFunctionalityPageObj = new searchFunctionalityPage()
describe('verify search functionality',()=>{
    let userData;
beforeEach(() => {
        cy.fixture('register').then((data) => {
            userData = data;

        })
    })
    it('verify user is able to use search functionality',()=>{
        searchFunctionalityPageObj.openURL();
        searchFunctionalityPageObj.enterinsearch(userData.productsearch);
        searchFunctionalityPageObj.enterinsearchButton();
        searchFunctionalityPageObj.verifynameofproduct();
    })
})