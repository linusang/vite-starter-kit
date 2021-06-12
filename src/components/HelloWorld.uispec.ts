import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
  it("should display header text", () => {
    const msg = "Hello Cypress";
    mount(HelloWorld, {
      props: {
        msg,
      },
    });

    cy.get("h1").contains(msg);
  });
});

// import { mount } from "@vue/test-utils";
// import HelloWorld from "./HelloWorld.vue";

// describe("HelloWorld", () => {
//   it("should display header text", () => {
//     const msg = "Hello Vue 3";
//     const wrapper = mount(HelloWorld, { props: { msg } });

//     expect(wrapper.find("h1").text()).toEqual(msg);
//   });
// });
