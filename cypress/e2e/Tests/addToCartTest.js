

describe('verify add to cart functionality',()=>{
    let userData;
    beforeEach(()=>{
        cy.fixture('register').then((data)=>{
            userData=data
        })

    })
    it("verify user is able to use add cart functionality",()=>{
        cy.checkoutfunction(userData.Country)
    })
})