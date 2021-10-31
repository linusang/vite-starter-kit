# Vue 3 + Typescript + Vite + TailwindCSS + Jest + Cypress + ESLint + Prettier

This template should help get you started developing with Vue 3 and Typescript in Vite.

### Opinionated Starter Kit

Uses the additional following libraries:

1. [Tailwind CSS](https://tailwindcss.com/) (because utility-CSS scales better)
2. [Jest](https://jestjs.io/) (because JEST is popular?)
3. [Cypress](https://www.cypress.io/) (because UI Component-testing rox!)
4. [Prettier](https://prettier.io/) (auto-formats when save in VS Code)
5. [ESLint](https://eslint.org/) (Fix problems in your TypeScript Code)

### For Testing

- Jest to test business logic (use `npm run jest`)
- Cypress to test UI/Component (use `npm run cypress` and use `npm run cypress-ci` to run in CI environment)

### For CSS

- Uses Tailwind CSS because of this [article](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
- Makes use of [JIT feature](https://www.youtube.com/watch?v=3O_3X7InOw8)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar).

### If Using `<script setup>`

[`<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) is a syntactic-sugar feature. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.
