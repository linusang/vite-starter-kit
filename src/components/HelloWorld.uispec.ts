import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";
import "../App.css";

describe("HelloWorld", () => {
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
    const button = cy.get("button[type=button]");
    button.click();
    button.click();
    button.contains("count is: 2");
  });
});
