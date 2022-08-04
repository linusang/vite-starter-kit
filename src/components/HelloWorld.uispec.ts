import "../App.css";

import { mount } from "@cypress/vue";

import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
  describe("with no specified message", () => {
    beforeEach(() => {
      mount(HelloWorld);
    });

    it("should display default message", () => {
      cy.get("h1").contains("this is the default message");
    });
  });
  describe("with specified message", () => {
    const msg = "Hello Cypress";

    beforeEach(() => {
      mount(HelloWorld, {
        props: {
          msg,
        },
      });
    });

    it("should display header text", () => {
      cy.get("h1").contains(msg);
    });

    it("should increment when button is pressed", () => {
      cy.getDataUi("btn-increment").click().click().contains("count is: 2");
    });
  });
});
