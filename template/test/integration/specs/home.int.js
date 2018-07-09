describe('Home Page', () => {
  it('should match Title', () => {
    cy.visit('/')
    cy.get('[data-test="hello-world"]')
      .should('contain', 'Hello World')
  })

  it('should mock XHR call and display on the screen', () => {
    cy.server({
      method: 'GET',
      delay: 1000,
      status: 200,
      response: {}
    })

    cy.route('/sample-route', {message: 'Yo'})

    cy.visit('/')
    cy.get('[data-test="xhr-message"]')
      .should('contain', 'Yo')
  })
})
