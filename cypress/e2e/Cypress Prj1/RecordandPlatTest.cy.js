

describe('Record and Play Suite ', () => {
  it('Test1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.log('Test 1 is started');
    cy.visit('https://www.youtube.com/');
    cy.log('Log in You Tube');
    cy.get('#search-input > #search').clear('t');
    cy.get('#search-input > #search').type('testers talk');
    cy.get('#sbse5 > .sbqs_c > b').click();
    cy.get('#search-icon-legacy > yt-icon.style-scope > .yt-icon-shape > div').click();
    cy.log('Test 1 is Stopped');
   
    //cy.get('#hover-overlays > .ytd-playlist-thumbnail > yt-icon.style-scope > .yt-icon-shape > div').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Test 2', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.log('Test 2 is started');
    cy.visit('https://www.youtube.com/');
    cy.log('Log in You Tube');
    cy.get('#search-input > #search').clear('n');
    cy.get('#search-input > #search').type('naveen automationlabs{enter}');
    cy.get('.ytd-channel-renderer > #img').click();
    cy.get('[tab-title="Playlists"] > .yt-tab-shape-wiz__tab').click();
    cy.log('Test 2 is Stopped');
    //cy.get('#hover-overlays > .ytd-playlist-thumbnail > yt-icon.style-scope > .yt-icon-shape > div').click();
    /* ==== End Cypress Studio ==== */
  });
})