## @hgw/next-template

Hello Great Works create-next-app TypeScript and Sass template.
An opionionated template to easily get started with Create Next App.

##### Features

* TypeScript
* SCSS
* CSS Modules support
* Root Resolver
* Opinionated linting rules

### Get Started

Run

```sh
git clone git@github.com:Hello-Group/hgw-next-template.git app-name
```

```sh
cd app-name
```

```sh
yarn install
```

```sh
yarn start
```

### Build

```
yarn build
```

### Additional resources

* [Create Next App documentation](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)


___


# Hello Great Works readme template

> A template for creating new projects at Hello Great Works

This repository is meant to serve as a template for how to set up new repositories. In general, setting up a new repository should take only a few minutes; use this readme as a guidance, and use the following checklist to ensure that you've set up the repository correctly. This template is based off of a template provided by [OrbitDB](https://github.com/orbitdb/repo-template).

```sh
# Overwrite this README
mv README.md setup-checklist.md
mv example-README.md README.md
# Go over and check off the items in the checklist, and finally
rm setup-checklist
```

## Checklist

Go through this checklist after creating your repository. It should only take a couple of minutes.

### README

- [ ] Rename all instances of `<Replace Title>` in README.md to match the new repo title
- [ ] Manually go through and edit the rest of the README.

### Other Files

- [ ] Should you have a `CHANGELOG.md`? If so, create it.
- [ ] Will the project benefit from having a `CODEOWNERS` file? If so, create it.

### GitHub Branches

- [ ] Does your project require a `dev`, `staging` and `main` branch?
  Note: Smaller projects should be fine with just two branches, `dev` and `main` deploying to each their server/service.
- [ ] Are branches linked to the corresponding server environments? I.e. `dev` to a development environment, `staging` to staging and `main` to production?
- [ ] Have you added appropriate branch protection rules for deployment branches? 

### Dotfiles

- [ ] Do you need a `.gitignore` file (most likely, yes)?
  - [ ] Will your project contain secrets not listed in `.gitignore`? If so - add these.
- [ ] Do you need an `.npmignore` file? Relevant for npm packages.

### GitHub Access

- [ ] Have all contributors been granted access to the repository?

### GitHub Metadata

- [ ] Have you added a short description to the repository?
  - [ ] Is the description matched in the byline under the title in the README?

### GitHub Security
- [ ] Have you enabled Dependabot alerts in your GitHub repo settings? Required for high-risk projects and clients.

### `package.json`

- [ ] Have you added tests? Are they matched, here?
- [ ] Have you added a `lint` command? You should be using `stylelint` (for styling) and/or `eslint`.
- [ ] Are you using [Prettier](https://prettier.io/) for code formatting? (recommended)
- [ ] Have you setup linting/formatting rules corresponding to the ones provided in [Hello Great Works linting rules](https://github.com/Hello-Group/knowledge-base/wiki/Linting-rules)?

### Tests

- [ ] Are there automated tests?
- [ ] Are those reflected in CI?

### Non-Functional Requirements (NFR)

- [ ] Are there non-functional requirements? If so, please list them in the README
