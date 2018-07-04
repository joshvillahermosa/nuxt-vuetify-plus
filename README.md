# Nuxt Vuetify+ Starter Template
> A Nuxt and Vuetify Project Template

This project comes equiped with the following:
* [Nuxt](https://nuxtjs.org/) _Server Side Rendering Framework in Vue_
* [Vuetify](https://vuetifyjs.com/en/) _Vue Material UI Library_
* [Jest](https://jestjs.io/docs/en/getting-started) _Unit Testing_
* [Cypress](https://www.cypress.io/) _Integration/Unit Testing_
* [ES Lint](https://eslint.org/) _Linting Utility_
* [Commitizen](https://github.com/commitizen/cz-cli) _To write better commit messages_
* [Standard Version](https://github.com/conventional-changelog/standard-version) _Genertate Change logs_
* [Husky](https://github.com/commitizen/cz-cli) _Precommit hooks (Used to run ci tests before pushing)_

## Why?
To have a opinionated setup and development workflow that needs a mock server, linting, unit, end to end (E2E), proper commit logs and checkings before pushing up. 

## Installation
_Please use Node Version 10 or above. Please use [nvm](https://github.com/creationix/nvm) to manage your node versions_

```bash
npm install
# or
yarn
```
**Note: all subsequent commands can be run with `yarn` commands as well**

## Setup
This application uses a `dotenv` setup recommended by the [12 Factor App](https://12factor.net/). To set up, look at or copy `.env_example` to `.env`. Put environment variables here. Example:

```bash
# Stick Configs Here 

API_HOST=http://localhost:3001

```
Environment variables will be accessible within the application as `process.env.*` _*_ - example: API_HOST. **Note that `.env` is ignored by default.

## Development
```bash
# Serve with hot reload at localhost:3000
$ npm run dev
# Serve A Mock Server
$ npm run mock-server
```

For detailed explanation on how things work, check out the [Nuxt.js](https://github.com/nuxt/nuxt.js) and [Vuetify.js](https://vuetifyjs.com/) documentation.

## Mock Server
A mock server can be started at `npm run mock-server`. It uses [express](https://expressjs.com/) as a basic web server. Editing the mock server can be found in the root folder `mock-server`,

## Contributing
```bash
# To start a commitizen style commit
$ npm run commit
```
After you make your changes, when you push it will run linting, unit, and integration tests. **Note you will need your localhost to run when pushing (npm run dev)**. This is needed for integration test. 

## Testing
### Linting
Run `npm run lint` to run eslint.

### Unit Testing
Unit testing is done in [Jest](https://jestjs.io/docs/en/getting-started). Please write test in `*.spec.js` for unit tests to be picked up.

```bash
# Will run all unit tests
$ npm run unit
# Will run unit tests as watcher
$ npm run unit --watchAll
```

### Integration
Integration is written in [Cypress](https://www.cypress.io/). Tests are written in `/test/integration/specs` and examples can be found in the integration root folder.

```bash
# Run headless integration
$ npm run integration
# Run for interactive integration
$ npm run integration:open
```

## Build Setup

``` bash
# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Releasing
Run `npm run release` to generate a changelog and bump the current version. Refer to [standard version documentation](https://github.com/conventional-changelog/standard-version) to run additional commands with `npm run release`

## To Do's
- [x] Jest Integration
- [x] Cypress Integration
- [x] Husky Integration
- [x] Commitizen Integration
- [x] Mock Server Integration
- [x] .env Integration
- [x] Add Change Log
- [x] Update Docs
- ~~[ ] Add NSP~~ _Needs evaluation_
- [ ] Integration tests to spawn live server
- [ ] Create using Vue Cli
- [ ] Document Generator
- [ ] Fix Async Created Test in `index.vue`
- [ ] Update Store
