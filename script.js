describe('Contact Information Test', () => {
  it('Verifies the contact information on Byndyusoft website', () => {
    cy.visit('https://www.google.ru/')
    cy.get('input[name="q"]').type('Byndyusoft')
    cy.get('input[name="btnK"]').click()
    cy.contains('Byndyusoft').click()
    cy.contains('Заказать презентацию').click()
    cy.get('a[href="https://t.me/alexanderbyndyu"]').should('have.attr', 'href', 'https://t.me/alexanderbyndyu')
  })
})
