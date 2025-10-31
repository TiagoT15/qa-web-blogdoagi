import { BlogPage } from '../pages/BlogPage'

describe('Blog Search Functionality', () => {
  const blogPage = new BlogPage()
  
  beforeEach(() => {
   cy.visit('/')
  })

  it('should search with valid term and display results', () => {
    cy.fixture('search-terms').then((data) => {
      const searchTerm = data.validTerms[0]
      
      // Interceptar requisições para observabilidade
      cy.intercept('GET', '**/search**').as('searchRequest')
      
      // Realizar busca
      blogPage.performSearch(searchTerm)
      
      // Validar resultados
      blogPage.verifySearchResults()
      
      // Validar e navegar para o primeiro post
      blogPage.getFirstPostTitle().then((title) => {
        expect(title).to.not.be.empty
        blogPage.clickFirstPost()
        blogPage.verifyPostPage()
      })
    })
  })

  it('should handle search with no results gracefully', () => {
    cy.fixture('search-terms').then((data) => {
      const invalidTerm = data.invalidTerms[0]
      
      // Interceptar requisições para observabilidade
      cy.intercept('GET', '**/search**').as('searchRequest')
      
      // Realizar busca com termo inválido
      blogPage.performSearch(invalidTerm)
      
      // Validar estado sem resultados
      blogPage.verifyNoResults()
      
      // Verificar que não há erros JS - já configurado no e2e.ts
      cy.get('@consoleError').should('not.have.been.called')
    })
  })

  it('should open search field when clicking search icon', () => {
    blogPage.clickSearchIcon()
    blogPage.verifySearchFieldVisible()
  })
})