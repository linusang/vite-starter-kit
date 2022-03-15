/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * a helper method to simulate clicking outside of the element
       */
      clickOutside(): Chainable<JQuery<HTMLBodyElement>>;
      /**
       * this is an alias method to cy.get(`[data-ui=${value}]`)
       * @param value the value of "data-ui" attribute in DOM
       */
      getDataUi(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
