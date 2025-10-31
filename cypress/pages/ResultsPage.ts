export class ResultsPage {
  private resultsList = 'article';
  private firstResultLink = 'article:first-child h2 a, article:first-child .entry-title a';
  private noResultsMessage = '.search-no-results, body';

  hasResults(): Cypress.Chainable<boolean> {
    return cy.get('body').then($body => {
      return $body.find(this.resultsList).length > 0;
    });
  }

  clickFirstResult(): void {
    cy.get(this.firstResultLink).first().should('be.visible').click();
  }

  verifyNoResults(): void {
    cy.get(this.noResultsMessage).should('contain.text', 'Lamentamos');
  }
}