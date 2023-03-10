# hugo-uswds

An open-source implementation of the [The United States Web Design System ](https://designsystem.digital.gov/) (USWDS) version 2.11.1 using the [Hugo](https://gohugo.io/) open-source static site generator.

Implementation of the USWDS is currently incomplete, but sufficient to support a number of websites hosted at NIST. [Contributions](CONTRIBUTING.md) to improve this project are welcome.

This project has been tested on HUGO version >= [0.58.3](https://github.com/gohugoio/hugo/releases/latest) and requires a `hugo-extended` build with pipe and SCSS generation support. Installation [instructions](https://gohugo.io/getting-started/installing) for common platforms are available in the Hugo [documentation](https://gohugo.io/documentation/).

## Usage

For details on using this theme, refer to [the documentation and demo site](https://pages.nist.gov/hugo-uswds-docs/).

### Installation

This template currently supports installation via Hugo Modules or as a Git Submodule.

#### Using Hugo Modules

For detailed instruction, refer to the [Hugo Module documentation](https://gohugo.io/hugo-modules/).

1. From your project directory, initialize Hugo Modules:

    ```
    $ hugo mod init $REPOSITORY
    ```

    *NOTE: here `$REPOSITORY` should be the path to your website repository (e.g. `github.com/<username/organization>/<repository>`)*

1. In your project directory, update your `config.yaml` with the following:

    ```yaml
    # import this repository as a hugo module
    module:
      imports:
        - path: "github.com/usnistgov/hugo-uswds"
    # specify that your theme is uswds
    theme: uswds
    ```

1. The theme will be downloaded the next time you run `hugo serve`.

#### Using Git Submodules

From your project directory, create the submodule in the `themes/` folder:

```
$ mkdir themes
$ git submodule add https://github.com/usnistgov/hugo-uswds.git themes/uswds
```
