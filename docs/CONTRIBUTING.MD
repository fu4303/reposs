# How to contribute

## Getting started

In this section we'll go through a quick setup to help you contribute to our project.

## Forking and cloning project

- Make a local directory somewhere on your computer.
- Fork the repo from GitHub

```bash
git clone https://github.com/<your-github-username>/reposs.git
```

Where `<your-github-username>` is your GitHub username (example: johndoe23)

Type `yarn` to install all the packages

## Add your remote branch

Switch to dev branch by running `git switch dev`

Create a branch in your forked repo, name it `dev-<your-name>-<number-of-patches>`

_example: `dev-gitter499-0`_

Go back to your local repo and add remote branch by typing `git remote add origin <your-fork-url>`

Then type `git fetch` to sync

## Start the app

Type `yarn start` to start local server

Then visit `http://localhost:3000`

## Development

Pickout an issue or feature request, add your changes (_Note: Some changes may require repo owner permission_).

## Testing your changes

Test the changes on your local machine, make sure there aren't any errors, and fully interact with the changes you made. (_Testing tip: Make sure changes look good on all screens_)

## Commiting your changes

Stage your changes and make a clear and concise commit message detailing what you did. You can also choose to document your changes further in Github.

## Pushing changes and creating a PR

Push your changes to your fork repo and refresh the page on GitHub. Press the 'Compare and Pull Request" button in order to make a PR. Review your changes and add any additional documentation.

Finally, create your PR.

## Getting your changes reviewed and approved

A maintainer or a code reviewer will review your changes and merge them. A reviewer will close the PR if they think the PR is unneccasary or unstable.

**Woohooo! You just contributed to reposs 🎉!**
