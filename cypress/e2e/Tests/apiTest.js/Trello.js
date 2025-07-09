describe('verify trello board',()=>{
         const APIKey =Cypress.env('APIKey');
         const APIToken =Cypress.env('APIToken')
        

    it('GET - Get a board',()=>{
        cy.request({
            method: 'GET',
            url : `https://api.trello.com/1/boards/p7A1QXKn?key=${APIKey}&token=${APIToken}`,
            
    
        }).should((response)=>{
           expect(response.status).to.eq(200);
           expect(response.duration).to.be.lessThan(800)
        })
    })
    it('PUT - Update a board',()=>{
        cy.request({
            method : 'PUT',
            url :   `https://api.trello.com/1/boards/p7A1QXKn?key=${APIKey}&token=${APIToken}&name=Mayu's Board`

        }).should((response)=>{
            expect(response.status).to.eq(200);
            expect(response.duration).to.be.lessThan(1200);
            expect(response.body).to.have.property("closed", false)
        })
    })
    it('POST-Create a board',()=>{
        cy.request({
            method :'POST',
            url : `https://api.trello.com/1/boards/?name=Adi's Board&key=${APIKey}&token=${APIToken}`

        }).should((response)=>{
            expect(response.status).to.eq(200);
            expect(response.duration).to.be.lessThan(1200);
            
        })

    })
    it('POST -Create a label on board',()=>{
        cy.request({
            method : 'POST',
            url :   `https://api.trello.com/1/boards/zljupJK0/labels?name=left&color=yellow&key=${APIKey}&token=${APIToken}`

        }).should((response)=>{
            expect(response.status).to.eq(200)  
        })
    })
    it('GET -get a powerups on board',()=>{
        cy.request({
            method:'GET',
            url:  `https://api.trello.com/1/boards/p7A1QXKn/plugins?key=${APIKey}&token=${APIToken}`
        }).should((response)=>{
           expect(response.status).to.eq(200);
           expect(response.duration).to.be.lessThan(900)
        })
    })
})
  