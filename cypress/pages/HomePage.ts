export class HomePage {
  visit(): void {
    cy.visit('/');
  }

  openSearch(): void {
    cy.get('a[aria-label="Search icon"]').click();
  }
}