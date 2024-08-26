describe('Search Text', () =>{

    it('Test1' , () => {
        cy.log('Test 1 is started');
        cy.visit('https://www.youtube.com/')
        cy.log('Navigated to YouTube')
        cy.get('input[id="search"]').type('Naveen Automation Labs')
        cy.get('button[id="search-icon-legacy"] > yt-icon').click()
        cy.log('Test 1 is Completed')
    })

} )