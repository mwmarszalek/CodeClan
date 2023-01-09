describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('numbers should update running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })
  it('do arithmetical operations update the running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })
  it('multiple operations can be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })
  it('should have correct output for a range of numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    //6.2
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6.2')
    // cy.get('.operator_add').click()
    // cy.get('#number2').click();
    // cy.get('#number0').click();
    // cy.get('#number0').click();
    // cy.get('#number0').click();
    // cy.get('#number0').click();
    // cy.get('#operator-equals').click();
    // cy.get('.display').should('contain', '20006.2')
  })
  it('should display specific error when dividing by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Div by 0 not allowed')
  })
})