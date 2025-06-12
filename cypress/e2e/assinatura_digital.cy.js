/// <reference types= "cypress" />

describe('Atendimentos Planos', () => {

  beforeEach(() => {
    cy.login()
    cy.refreshToken()
  });

  it('Validar retorno 201 - /api/v1/attendance/plan/forwarding', () => {

  });

});