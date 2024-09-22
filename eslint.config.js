import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import ts from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    //---- GLOBAL IGNORES
    // note folders can only be ignored at the global level, per-cfg you must do: '**/dist/**/*'
    ignores: ["**/dist/", "**/node_modules/"],
  },
  // add more generic rulesets here, such as:
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["*.vue", "**/*.vue", "*.ts", "**/*.ts"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      // override/add rules settings here:
      "vue/no-unused-vars": [
        "error",
        {
          ignorePattern: "^_",
        },
      ],
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/html-indent": "off",
      "vue/html-closing-bracket-newline": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
];
