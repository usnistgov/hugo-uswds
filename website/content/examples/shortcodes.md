---
title: "Shortcode Examples"
sidenav:
  toc:
    includehtml: true
menu:
  primary:
    parent: examples
    name: Shortcode Use
    weight: 20
---

## `usa-alert` Shortcode Examples

{{<usa-alert heading="Example Info Alert">}}
This is an *example* `informational` alert.
{{</usa-alert>}}

{{% usa-alert heading="Example Warning Alert" type="warning" %}}
This is an *example* `warning` alert.

The markdown used can be multiple paragraphs in length.
{{% /usa-alert %}}

{{% usa-alert heading="Example Success Alert" type="success"
class="usa-alert--no-icon" body-class="measure-1" %}}
This is an example `success` alert with *markdown* text.

You can also apply multiple styles to the alert. The `class` parameter can be used to apply styles to the outer alert, such as `class="usa-alert--no-icon"`. The `body-class` parameter can be used to apply styles to the text body, such as a `measure-1`.
{{% /usa-alert %}}
