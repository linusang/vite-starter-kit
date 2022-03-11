# Vue 3 + Typescript + Vite + TailwindCSS + Jest + Cypress + ESLint + Prettier

This template should help get you started developing with Vue 3 and Typescript in Vite.

### Opinionated Starter Kit

Uses the additional following libraries:

1. [Tailwind CSS](https://tailwindcss.com/) (because utility-CSS scales better)
2. [Vitest](https://vitest.dev/) (because running tests are fast)
3. [Cypress](https://www.cypress.io/) (because UI Component-testing rox!)
4. [Prettier](https://prettier.io/) (auto-formats when save in VS Code)
5. [ESLint](https://eslint.org/) (Fix problems in your TypeScript Code)

### Getting Started

Make sure you have [git](https://git-scm.com/) and [node](https://nodejs.org/) installed.

Navigate to your desired folder to save the files
and execute the following commands:

```
git clone https://github.com/linusang/vite-starter-kit.git .

// mac
rm -r .git

// windows
rmdir /s .git

git init

npm install

npm run dev

code .
```

### For Testing

- Vitest to test business logic (use `npm run vitest`)
- Cypress to test UI/Component (use `npm run cypress` and use `npm run cypress-ci` to run in CI environment)

### For CSS

- Uses Tailwind CSS because of this [article](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
- Makes use of [JIT feature](https://www.youtube.com/watch?v=3O_3X7InOw8)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### If Using `<script setup>`

[`<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) is a syntactic-sugar feature. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) .
