describe('Tela de Registro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register'); // Ajuste se a rota for diferente
  });

  it('Deve preencher todos os campos de input corretamente', () => {
    cy.get('.inpt-name').type('Lucas Pouey');
    cy.get('.inpt-email').type('lucas@exemplo.com');
    cy.get('.inpt-password').type('senhaSegura123');
    cy.get('.inpt-nickname').type('PoueyDev');

    // Checagem se os valores foram digitados corretamente
    cy.get('.inpt-name').should('have.value', 'Lucas Pouey');
    cy.get('.inpt-email').should('have.value', 'lucas@exemplo.com');
    cy.get('.inpt-password').should('have.value', 'senhaSegura123');
    cy.get('.inpt-nickname').should('have.value', 'PoueyDev');
  });

  it('Deve exibir mensagem de erro se o formulário for enviado incompleto', () => {
    cy.get('.btn-rpg').click();

    cy.get('.fst-italic')
      .should('exist')
      .and('not.be.empty');
  });

  it('Deve registrar usuário com dados válidos', () => {
    cy.get('.inpt-name').type('Lucas Pouey');
    cy.get('.inpt-email').type(`lucas${Date.now()}@test.com`);
    cy.get('.inpt-password').type('senhaSegura123');
    cy.get('.inpt-nickname').type(`PoueyDev${Date.now()}`);

    cy.get('.btn-rpg').click();

    // Supondo que vá para o login
    // cy.url().should('include', 'http://localhost:5173/');
  });
});


