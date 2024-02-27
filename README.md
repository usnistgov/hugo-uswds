# hugo-uswds

An open-source implementation of the [The United States Web Design System ](https://designsystem.digital.gov/) (USWDS) version 2.11.1 using the [Hugo](https://gohugo.io/) open-source static site generator.

Implementation of the USWDS is currently incomplete, but sufficient to support a number of websites hosted at NIST. [Contributions](CONTRIBUTING.md) to improve this project are welcome.

This project has been tested on HUGO version >= [0.111.2](https://github.com/gohugoio/hugo/releases/latest) and requires a `hugo-extended` build with pipe and SCSS generation support. Installation [instructions](https://gohugo.io/getting-started/installing) for common platforms are available in the Hugo [documentation](https://gohugo.io/documentation/).

## Usage

For details on using this theme, refer to [the documentation and demo site](https://pages.nist.gov/hugo-uswds/).

### Installation

The following configuration needs to be made regardless of the installation method.

In your project directory, update your `config.yaml` with the following:

```yaml
enableGitInfo: true # enable to get page modification dates for a site stored in Git
params:
  header:
    project_name: long name, e.g. Hugo US Web Design System Theme
    project_shortname: short name, e.g. Hugo USWDS
  contentRepoPath: (optional) path to Hugo content, e.g. https://github.com/usnistgov/hugo-uswds/tree/master/docs/content
  searchAffiliate: search.gov affiliate identifier
  usabanner: true # enable to USWDS usa banner for the site
markup:
  goldmark: # Markdown Rendering
    renderer:
      unsafe: true # required for the Hugo USWDS theme
  highlight: # Code Highlighting
    guessSyntax: true
    noClasses: false # enables USWDS styled syntax highlighting
```

This theme currently supports installation via Hugo Modules or as a Git Submodule.

#### Using Hugo Modules

For detailed instruction, refer to the [Hugo Module documentation](https://gohugo.io/hugo-modules/).

1. From your project directory, initialize Hugo Modules:

    ```bash
    hugo mod init $REPOSITORY
    ```

    *NOTE: here `$REPOSITORY` should be the path to your website repository (e.g. `github.com/<username/organization>/<repository>`)*

1. In your project directory, update your `config.yaml` with the following:

    ```yaml
    module:
      imports: # import this repository as a hugo module
      - path: "github.com/usnistgov/hugo-uswds"
    ```

1. The theme will be downloaded the next time you run `hugo serve`.

#### Using Git Submodules

1. From your project directory, create the submodule in the `themes/` folder:

    ```bash
    mkdir themes
    git submodule add https://github.com/usnistgov/hugo-uswds.git themes/uswds
    ```

1. In your project directory, update your `config.yaml` with the following:

    ```yaml
    theme:
    - uswds
    ```
1. The theme is used the next time you run `hugo serve`.

## Development of this theme

When working on modifications to this theme, the following commands can be used to test and build the theme.

For initializing the module:

```bash
npm install
```

For live editing:

```bash
npx gulp
```

For building prior to release:

```bash
npm run prepare
```
