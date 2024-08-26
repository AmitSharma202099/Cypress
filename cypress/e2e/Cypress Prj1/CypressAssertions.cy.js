describe('Cypress Assertion Suite', () => {

it('Cypress Assertion Test using to equal',() =>{
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    //X-Path //*[@id="APjFqb"]
    //css #APjFqb
    cy.get('#APjFqb').then((element) => {
        expect(element.text()).to.equal("javascript by testers talk");
    })
})

it('Cypress Assertion Test using should',() =>{
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    //X-Path //*[@id="APjFqb"]
    //css #APjFqb
    cy.get('#APjFqb').should("have.text","javascript by testers talk")
})

it('Cypress Assertion Test using contain',() =>{
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    //X-Path //*[@id="APjFqb"]
    //css #APjFqb
    cy.get('#APjFqb').should("contain","javascript by testers talk")
})

it('Cypress Assertion Test using should -> visible',() =>{
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    //X-Path //*[@id="APjFqb"]
    //css #APjFqb
    cy.get('#APjFqb').should("be.visible")
})
it('Cypress Assertion Test using should -> have.html',() =>{
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    //X-Path //*[@id="APjFqb"]
    //css #APjFqb
    cy.get('#APjFqb').should("have.html","javascript by testers talk")
})

it('Cypress Assertion Test using should -> have.html and attri value and include ',() =>{
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    //X-Path //*[@id="APjFqb"]
    //css #APjFqb
    cy.get('#APjFqb').should("have.html","javascript by testers talk")
    .and("have.attr","value").and("include","javascript")
})

it('Cypress Assertion Test using to.have.length(num)',() =>{
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    //X-Path //*[@id="APjFqb"]
    //css #APjFqb
    cy.get('#APjFqb').then((element) => {
        expect(element.text()).to.have.length(26);
    })
})

})