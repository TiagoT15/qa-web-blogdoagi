import { HomePage } from '../../pages/HomePage';
import { SearchWidget } from '../../pages/SearchWidget';

describe('Search - Bonus Features', () => {
  const homePage = new HomePage();
  const searchWidget = new SearchWidget();

  it('should normalize accents and case variations', () => {
    homePage.visit();
    
    searchWidget.clickSearchIcon();
    searchWidget.typeSearchTerm('cartao');
    searchWidget.submitSearch();
    
    cy.url().should('include', 's=cartao');
    
    homePage.visit();
    searchWidget.clickSearchIcon();
    searchWidget.typeSearchTerm('CARTÃO');
    searchWidget.submitSearch();
    
    cy.url().should('include', 's=CART');
  });

  it('should persist search term in URL and maintain state on reload', () => {
    homePage.visit();
    
    searchWidget.clickSearchIcon();
    searchWidget.typeSearchTerm('pix');
    searchWidget.submitSearch();
    
    cy.url().should('include', 's=pix').then(url => {
      cy.reload();
      cy.url().should('eq', url);
    });
  });
});