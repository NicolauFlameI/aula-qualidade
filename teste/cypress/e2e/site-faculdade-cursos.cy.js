describe('Filtrand cursos',() => {
    beforeEach(()=> {
        cy.visit('http://localhost:5500/cursos.html')
    })

    it('deve filtrar por nome',() => {
        cy.get('input[type=search]').type('Ciências da Computação')
        cy.get('table tbody tr').should('have.length',1)
    })

    it('deve filtrar por semestre',() => {
        cy.get('input[type=search]').type('10 semestre')
        cy.get('table tbody tr').should('have.length',1)
    })
})