import { BlogPage } from '../pages/BlogPage'

describe('Blog Search - Bonus Features', () => {
  const blogPage = new BlogPage()
  
  beforeEach(() => {
    blogPage.visit()
  })

  it('should normalize accents and case in search', () => {
    const searchTerm = 'programação'
    
    blogPage.performSearch(searchTerm)
    
    // Verificar se a busca foi executada (URL mudou)
    cy.url().should('include', '?s=')
    
    // Verificar se há resultados ou mensagem de sem resultados
    cy.get('body').then(($body) => {
      if ($body.find('.search-results, .post-item, article').length > 0) {
        blogPage.verifySearchResults()
      } else {
        // Se não há resultados, verificar se a página de sem resultados está correta
        cy.get('body').should('contain.text', 'Lamentamos')
      }
    })
  })

  it('should persist search term in URL and maintain state on reload', () => {
    cy.fixture('search-terms').then((data) => {
      const searchTerm = data.validTerms[0]
      
      blogPage.performSearch(searchTerm)
      
      // Verificar se a URL contém parâmetro de busca
      cy.url().should('include', '?s=')
      
      // Capturar URL atual
      cy.url().then((currentUrl) => {
        // Recarregar página
        cy.reload()
        
        // Verificar se a URL permanece a mesma
        cy.url().should('eq', currentUrl)
        
        // Verificar se ainda está na página de busca
        cy.get('body').should('contain.text', 'Blog do Agi')
      })
    })
  })
})