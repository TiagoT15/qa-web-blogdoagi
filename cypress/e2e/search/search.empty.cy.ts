import { HomePage } from '../../pages/HomePage';
import { SearchWidget } from '../../pages/SearchWidget';
import { ResultsPage } from '../../pages/ResultsPage';

describe('Search - Empty Results', () => {
  const homePage = new HomePage();
  const searchWidget = new SearchWidget();
  const resultsPage = new ResultsPage();

  it('should handle search with no results gracefully', () => {
    homePage.visit();
    
    searchWidget.clickSearchIcon();
    searchWidget.typeSearchTerm('xyzabc123456');
    searchWidget.submitSearch();
    
    cy.url().should('include', 's=xyzabc123456');
    resultsPage.verifyNoResults();
  });
});