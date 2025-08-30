describe('Pagina Inicial', () => {
  it('deve carregar corretamente',() => {
    cy.visit('http://localhost:5500/index.html')
    cy.contains('Bem-vindo à Faculdade Tech')
  })

  it('deve carregar ate pagina de curso', () => {
    cy.visit('http://localhost:5500/index.html')
    cy.get('nav a').contains('Cursos').click()
    cy.url().should('include','cursos.html')
  })
})