export class SearchWidget {
  private searchIcon = 'a[aria-label="Search icon"]';
  private searchField = '#search-field';

  clickSearchIcon(): void {
    cy.get(this.searchIcon, { timeout: 10000 }).click();
  }

  typeSearchTerm(term: string): void {
    cy.get(this.searchField).should('be.visible').type(term);
  }

  submitSearch(): void {
    cy.get(this.searchField).type('{enter}');
  }
}