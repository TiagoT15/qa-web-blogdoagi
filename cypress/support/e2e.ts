import './commands'

const IGNORE_ERRORS = [/astra is not defined/i, /publicPath/i];

Cypress.on('uncaught:exception', (err) => {
  return IGNORE_ERRORS.some(rx => rx.test(err.message)) ? false : true;
});
