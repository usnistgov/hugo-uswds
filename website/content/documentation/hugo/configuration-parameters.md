---
title: "Hugo Configuration"
weight: 10
---

## Site-Wide Configuration

Hugo provides a variety of [configuration options](https://gohugo.io/getting-started/configuration/). For simplicity, this documentation and associated examples assume a YAML-based, single file configuration is used for a site using this theme. In this case all Hugo site-wide configurations are made in the `config.yaml` located at the root of the website dirctory. Other options are available for configuring Hugo using alternate config file formats and directory structures, which are not covered on this page.

The following subsections describe the configurations that are relevant to this theme.

### Primary and Secondary Navigation

This theme uses two different menus: primary and secondary.

The primary and secondary menus are used by the Extended Header [template](../templates/#the-header-extended-html-template), while only the primary menu is used by the Basic Header [template](../templates/#the-header-basic-html-template).

Hugo supports [configuring navigation](https://gohugo.io/content-management/menus/) in both the site configuration and in the [front matter](#primary-and-secondary-navigation-1) of an indvidual page. Typically, menu items that do not pertain to page resources are configured in the site configuration file, while menu entries for a page resource is configured in that page. The latter allows the menu entry to follow the page.

The following is an example of defining a portion of a menu in the site configuration.

```yaml
menu:
  primary:
  - name: "NIST website"
    url: "https://www.nist.gov/"
    weight: 10
  secondary:
  - name: "Website Github"
    url: "https://github.com/usnistgov/hugo-uswds-docs"
    weight: 90
  - name: "Theme Github"
    url: "https://github.com/usnistgov/hugo-uswds"
    weight: 90
```

Each menu takes a list of menu entries consisting of `name` and `url` properties.

The *optional* `weight` property establishes the order in which the menu entry will be displayed within the navigation. All entries without a weight will be displayed after those with a weight.

### Side Navigation

The following site configurations can be used to customize the side navigation behavior in the `config.yaml` file:

- `sidenav.includeTopLevel`: If `true`, a sidenav entry will be created at the top of the nav for the corresponding top-level section. If `false`, the entry for the top-level section will be suppressed.

{{<highlight yaml>}}
params:
  sidenav:
    includeTopLevel: true
{{</highlight >}}

### Other Parameters

The following additional site-wide configurations can be used in the `config.yaml` file:

- `contentrepopath` (**optional**): If provided, a link will be provided relative to this path that allows a viewer to propose a change to the page.

- `suppresstopiclists` (**optional**, **default:** false)

- `custom_css` (**optional**):

- `custom_js` (**optional**):

## Page-Specific Configuration

### Primary and Secondary Navigation

### Side Navigation

The following page-specific configurations can be used to customize how information for a given page appears in the side navigation:

- `sidenav.title`(**optional**): By default, the label used for a page in the side navigation is the Page's title. This page parameter can be used to provide an alternate title for use in the side navigation. This can be used to provide a shorter title when desired.

{{<highlight yaml>}}
sidenav:
  title: "Sidenav Page Title"
{{</highlight >}}

- `sidenav.toc.enabled`(**optional**, **default:** true): If `true` or not specified, a table of contents will be generated in the side navigation based on the page headings. If `false` the table of contents is suppressed.

{{<highlight yaml>}}
sidenav:
  toc:
    enabled: true
{{</highlight >}}

- `sidenav.toc.headingselectors`(**optional**, **default:** h2, h3, h4): This parameter can be set to a comma seperated list of CSS selectors that indicate which page headers should be included in the table of contents.

{{<highlight yaml>}}
sidenav:
  toc:
    headingselectors: "h2,h3.sub1"
{{</highlight >}}

- `sidenav.toc.includehtml`(**optional**, **default:** false): If `true`, the HTML defined in each heading will be copied into the link used in each table of content entry. If `false` or not specified, any HTML tags will be stripped out of each content entry.

{{<highlight yaml>}}
sidenav:
  toc:
    includeHtml: true
{{</highlight >}}

- `sidenav.toc.collapsedepth`(**optional**, **default:** 0): A number ranging from `0` to `6` indicating how many heading levels should not be collapsed. All heading levels below this level, will be collapsed unless the browser is scrolling through these headings. The value `0`, indicates that all headings below the first available level will be collapsed.

{{<highlight yaml>}}
sidenav:
  toc:
    collapseDepth: 2
{{</highlight >}}

### Other Parameters

The following additional site-wide configurations can be used in the front matter of each page:

- `usabanner` (**optional**, **default:** false): If `true`, the USWDS "official government website" [banner](https://designsystem.digital.gov/components/header/) will be displayed at the top of the page.

- `suppresstopiclist` (**optional**, **default:** false):

- `custom_css` (**optional**):

- `custom_js` (**optional**):
