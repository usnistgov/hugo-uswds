---
title: "USWDS Components"
weight: 10
sidenav:
  toc:
    collapsedepth: 3
---

## Supported Components

The following USWDS components are supported by this theme.

### Alert

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Alert](https://designsystem.digital.gov/components/alert/)

Alerts are supported by the [usa-alert](../hugo/shortcodes/#usa-alert) shortcode.

### Layout Grid

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Grid](https://designsystem.digital.gov/utilities/layout-grid/)

This theme uses Grid layouts as part of the default [page templates](../hugo/templates/).

The following Hugo shortcodes can be used to customize the grid layout used on a given page.

- [usa-grid-container](../hugo/shortcodes/#usa-grid-container): Can be used to center the content on the screen, with a maximum width of desktop (1024px).
- [usa-grid-row](../hugo/shortcodes/#usa-grid-row): Used with the `usa-grid-column` shortcode to support more fine-grained layouts.
- [usa-grid-column](../hugo/shortcodes/#usa-grid-column): Used to layout the spacing of individual columns with a `usa-grid-row` shortcode.

### Header

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Header](https://designsystem.digital.gov/components/header/)

The USWDS [Basic](../hugo/templates/#the-header-basic-html-template) and [Extended](../hugo/templates/#the-header-extended-html-template) headers are provided in this theme. The "mega menu" variants are not currently supported.

#### Basic Header

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Basic Header](https://designsystem.digital.gov/components/header/#basic)

The Basic Header uses primary navigation menus defined in the [site-wide](../hugo/configuration-parameters/#primary-and-secondary-navigation) and [page-specific](../hugo/configuration-parameters/#primary-and-secondary-navigation-1) configurations.

The Basic Header is used in the [List](../hugo/templates/#list-template) and [Page](../hugo/templates/#page-template) templates to provide top-level navigation for all pages of the site, other than the homepage.

#### Extended Header

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Extended Header](https://designsystem.digital.gov/components/header/#extended)

The Extended Header uses primary and secondary navigation menus defined in the [site-wide](../hugo/configuration-parameters/#primary-and-secondary-navigation) and [page-specific](../hugo/configuration-parameters/#primary-and-secondary-navigation-1) configurations.

The Extended Header is used in the [homepage](../hugo/templates/#homepage-template) template to provide top-level navigation for the site's main homepage.

### Icons

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Icons](https://designsystem.digital.gov/components/icons/)

A [subset](https://github.com/usnistgov/hugo-uswds/tree/master/static/img) of [Font Awesome](https://fontawesome.com/) icons are included in USWDS and can be accessed as static images using `/img/{icon-filename}`. If you need additional icons, use [Font Awesome](https://fontawesome.com/) in your project.

### Search

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Search](https://designsystem.digital.gov/components/search/)

The search component is supported in the [Basic](/documentation/components/#basic-header) and [Extended](/documentation/components/#extended-header) Headers provided by the default [templates](../hugo/templates/). The default search used by these headers is provided by the `layouts/partials/header-search.html` [template](https://github.com/usnistgov/hugo-uswds/blob/master/layouts/partials/components/header-search.html). This template can by [overriden](../hugo/templates/#the-header-search-html-template) to provide a custom search.

### Side Navigation

{{% usa-tag %}}Component Definition{{% /usa-tag %}}  [Side Navigation](https://designsystem.digital.gov/components/sidenav/)

The generation of side navigation can be customized using [site](../hugo/configuration-parameters/#site-wide-configuration) and [page](../hugo/configuration-parameters/#page-specific-configurations) parameters.

The [list](../templates/#list-template) and [page](../templates/#page-template) templates support auto generation of side navigation.

A few enhancements have also been made over the side navigation provided by USWDS. This theme uses [Tocbot](https://tscanlin.github.io/tocbot/) to automatically generate a table of contents for each page in the side navigation. The entries in the table of contents are based on the headings within the page. The behavior of the table of contents can be customized by the [page parameters](../hugo/configuration-parameters/#page-specific-configuration): `sidenav.toc.enabled`, `sidenav.toc.headingselectors`, `sidenav.toc.includeHtml`, and `sidenav.toc.collapseDepth`.

### Table

{{% usa-tag %}}Component Definition{{% /usa-tag %}}  [Table](https://designsystem.digital.gov/components/table/)

A partial implementation of the USWDS Bordered Table component is provided when using tables in Markdown.

Borderless Tables are not currently supported.

### Tag

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Tag](https://designsystem.digital.gov/components/tag/)

The USWDS Tag component is supported by the [usa-tag](../hugo/shortcodes/#usa-tag-shortcode) shortcode.

### Typography

{{% usa-tag %}}Component Definition{{% /usa-tag %}} [Typography](https://designsystem.digital.gov/components/typography/)

Some aspects of the USWDS Typography are currently supported, as follows.

#### Prose Formatting

Some features of USWDS [prose](https://designsystem.digital.gov/components/typography/#prose) is supported by this theme.

The `usa-intro` shortcode can be used for intro text.

Inline HTML can be included in markdown to make use of `p` and `span` tags with typography classes.

#### USWDS Theme Settings

This theme uses the following USWDS theme settings to provide default styles for Markdown text.

```scss
$theme-global-paragraph-styles: true;
$theme-global-link-styles:      true;
$theme-global-content-styles:   true;
```

The setting `$theme-global-paragraph-styles` provides default styling for Markdown paragraphs.

The setting `$theme-global-link-styles` provides default styling for Markdown links.

The setting `$theme-global-content-styles` provides default styling for paragraph text, links, headings, lists, and tables.

## Unsupported Components

The following USWDS components are not currently supported by this theme:

- [Accordion](https://designsystem.digital.gov/components/accordion/)
- [Button](https://designsystem.digital.gov/components/button/)
- [Footer](https://designsystem.digital.gov/components/footer/)
- [Form Controls](https://designsystem.digital.gov/components/form-controls/)
- [Form Templates](https://designsystem.digital.gov/components/form-templates/)

It is possible to use these USWDS components as inline HTML inside Markdown pages.
