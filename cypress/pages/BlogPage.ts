export class BlogPage {
  private searchIcon = '.site-header-above-section-right > .ast-builder-layout-element, a[aria-label="Search icon"], .search-icon, .search-toggle'
  private searchField = '#search-field'
  private searchResults = '.search-results, .post-item, article'
  private noResultsMessage = '.no-results, .search-no-results'
  private firstPostTitle = '.post-title, .entry-title, h2 a, h3 a'
  private firstPostLink = '.post-title a, .entry-title a, h2 a, h3 a'

  visit(): void {
    cy.visit('/')
    
    // Aguardar página carregar completamente
    cy.get('body').should('be.visible')
  }

  clickSearchIcon(): void {
    cy.get(this.searchIcon).first().click()
  }

  typeSearchTerm(term: string): void {
    cy.get(this.searchField).type(term, { force: true })
  }

  submitSearch(): void {
    cy.get(this.searchField).type('{enter}', { force: true })
  }

  performSearch(term: string): void {
    this.clickSearchIcon()
    
    // Aguardar o campo de busca ficar disponível
    cy.get(this.searchField, { timeout: 10000 }).should('exist')
    
    this.typeSearchTerm(term)
    this.submitSearch()
    
    // Aguardar navegação para página de busca
    cy.url({ timeout: 30000 }).should('include', '?s=')
  }

  verifySearchResults(): void {
    cy.get(this.searchResults).should('exist').and('have.length.greaterThan', 0)
  }

  verifyNoResults(): void {
    cy.get('body').should('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
  }

  getFirstPostTitle(): Cypress.Chainable<string> {
    return cy.get(this.firstPostTitle).first().invoke('text')
  }

  clickFirstPost(): void {
    cy.get(this.firstPostLink).first().click()
  }

  verifyPostPage(): void {
    cy.url().should('not.equal', Cypress.config().baseUrl + '/')
    cy.get('h1, .post-title, .entry-title').should('exist')
  }

  verifySearchFieldVisible(): void {
    cy.get(this.searchField).should('exist')
  }

  verifyNoJSErrors(): void {
    cy.window().then((win) => {
      expect(win.console.error).to.not.have.been.called
    })
  }
}