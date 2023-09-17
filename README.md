# Boilerplate for react projects panel

## Main technology

- vite
- react
- typescript
- axios - react-query
- react-router-dom
- react-redux - redux toolkit - redux-persist
- tailwind

### first of all install packages

`npm i or npm install`

### run project

`npm run dev`

## Integrating with VSCode

we will configure VSCode to use ESLint and Prettier to find problems and format our code, respectively.\
If you don't have the extensions installed yet, install them: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
With the extensions already installed, we will have to configure VSCode to use Prettier to format our file on save.

## Prettier & ESLint dependencies

We need to install the following dependencies:

- ESLint: Our main linter.

- Prettier: Our main code formatter.

- @typescript-eslint/eslint-plugin: An ESLint plugin which provides rules for TypeScript codebases.

- @typescript-eslint/parser: A parser which allows ESLint to lint TypeScript source code.

- eslint-config-prettier: An ESLint configuration which disables the formatting rules in ESLint that Prettier is going to be responsible for handling, hence avoiding any clashes.

- eslint-plugin-import: Tells ESLint how to resolve imports.

- eslint-plugin-jsx-a11y: Checks for accessiblity issues.

- eslint-plugin-react: React specific linting rules for ESLint.
