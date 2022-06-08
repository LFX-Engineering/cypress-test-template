# Cypress Testing Template

This repository serves as a base template for testing Cypress integrations with the UI.

### Dependencies

- [Angular](https://angular.io)
- [Cypress](https://cypress.io)
- [Tailwindcss](https://tailwindcss.com)

### Development

This section outlines the steps needed to begin development and testing.

##### Clone the repository

```bash
git clone git@github.com:LF-Engineering/cypress-test-template.git
```

##### Navigate to the repository

```bash
cd cypress-test-template
```

##### Install NPM dependencies

```bash
yarn install
```

##### Start application locally

```bash
yarn start
```

The command above will make the application available on [http://localhost:4200](http://localhost:4200)

### Cypress

In order to run Cypress, you will need to have [started your application](#start-application-locally) and it will need to be available on [http://localhost:4200](http://localhost:4200).

##### Start Cypress UI

```bash
yarn cypress:open
```

##### Run Cypress CLI

```bash
yarn cypress:run
```
