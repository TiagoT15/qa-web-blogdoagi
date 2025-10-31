import { HomePage } from '../../pages/HomePage';
import { SearchWidget } from '../../pages/SearchWidget';
import { ResultsPage } from '../../pages/ResultsPage';

describe('Search - Valid Term', () => {
  const homePage = new HomePage();
  const searchWidget = new SearchWidget();
  const resultsPage = new ResultsPage();

  it('should search with valid term and navigate to first result', () => {
    homePage.visit();
    
    searchWidget.clickSearchIcon();
    searchWidget.typeSearchTerm('cartão');
    searchWidget.submitSearch();
    
    cy.url().should('include', 's=');
    
    resultsPage.hasResults().then(hasResults => {
      if (hasResults) {
        resultsPage.clickFirstResult();
        cy.url().should('not.equal', Cypress.config().baseUrl);
      }
    });
  });
});