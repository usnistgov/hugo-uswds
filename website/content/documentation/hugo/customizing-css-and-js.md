---
title: "Customizing CSS and JavaScript Resources"
weight: 90
---

## Customizing CSS Resources

### Sass Customizations

Sass files are located in the themes [`assets/scss`](https://github.com/usnistgov/hugo-uswds/blob/master/assets/scss) directory.

### Site-Wide CSS Resources

A CSS resource can be added to the site by placing the CSS file in the `assets` directory and then referencing this file using the `custom_css` site parameter in the `config.yaml`.

### Page-Specific CSS Resources

A CSS resource can be added to an individual page by placing the CSS file in the `assets` directory and then referencing this file using the `custom_css` page parameter in the page front matter.

## Customizing JavaScript Resources

Like CSS, custom JavaScript resources can be added to the site or a page using the `custom_js` site and page parameters.
