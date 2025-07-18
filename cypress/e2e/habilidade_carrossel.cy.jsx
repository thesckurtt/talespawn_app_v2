describe('HabilidadeCarrossel', () => {
  beforeEach(() => {
    cy.mount(<HabilidadeCarrossel attributes={{
      magic: 3,
      attack: 2,
      healing: 4,
      perception: 1
    }} />);
  });

  it('deve exibir a primeira habilidade (Magia)', () => {
    cy.contains('Magia').should('exist');
    cy.contains('Representa a inteligência').should('exist');
    cy.contains('Valor: 3').should('exist');
  });

  it('deve alternar habilidades a cada 3 segundos', () => {
    cy.wait(3100); // espera um ciclo
    cy.get('.habilidade-carousel h2').should('not.contain.text', 'Magia');
  });
});
