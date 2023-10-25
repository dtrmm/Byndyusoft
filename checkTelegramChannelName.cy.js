const { get } = require("http")


describe('Contact Information Test', () => {
  it('Verifies the contact information on Byndyusoft website', () => {
    cy.visit('https://www.google.ru/')
    cy.get('#APjFqb').type('Byndyusoft{enter}')
    cy.wait(7500)
    cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > div > span > a")
    .invoke('attr', 'href')
    .then(href => {
      cy.visit(href)
    })

    cy.origin('byndyusoft.com', () => {

    
    cy.get("body > section.knowMore > div > span").click()
    cy.get(".popup-callback__contacts-tg").should('have.attr', 'href', 'https://t.me/alexanderbyndyu')
  })
  })
})