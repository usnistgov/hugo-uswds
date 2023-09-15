---
title: "Syntax Highlighting Examples"
menu:
  primary:
    parent: examples
    name: Syntax Highlighting
    weight: 30
---

## C

{{<highlight c "linenos=table">}}
#include<stdio.h>	// Include pre-processor directive

void main() {	// the main function declaration
  printf("Hello World");	// output to stdout
}
{{</highlight>}}

## Python

{{<highlight python "linenos=table">}}
print("Hello World!")
{{</highlight>}}

## XML

{{<highlight xml "linenos=table">}}
<part class="guidance" id="ac-1_gdn" xmlns="namespace">
  <!-- comment -->
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Iaculis urna id volutpat lacus. Sagittis purus sit amet volutpat consequat mauris. Curabitur gravida arcu ac tortor. Dolor morbi non arcu risus. Consectetur adipiscing elit ut aliquam purus. Luctus accumsan tortor posuere ac ut consequat semper. Nullam non nisi est sit amet. Et tortor at risus viverra adipiscing at in tellus integer. Dui ut ornare lectus sit amet est placerat. Augue interdum velit euismod in. Urna condimentum mattis pellentesque id nibh tortor. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Sem nulla pharetra diam sit amet.</p>

  <p>Feugiat pretium nibh ipsum consequat nisl vel. Sociis natoque penatibus et magnis dis parturient montes. Nunc sed id semper risus in hendrerit. Mauris ultrices eros in cursus turpis massa tincidunt. Faucibus et molestie ac feugiat sed lectus vestibulum. Nunc eget lorem dolor sed viverra. Eu augue ut lectus arcu. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat sed lectus vestibulum mattis ullamcorper velit. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Amet luctus venenatis lectus magna fringilla. Ullamcorper dignissim cras tincidunt lobortis. Nibh praesent tristique magna sit amet purus. Nulla at volutpat diam ut venenatis tellus in. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Consectetur lorem donec massa sapien.</p>
  <link rel="related" href="#pm-9">PM-9</link>
</part>
{{</highlight>}}

## YAML

{{<highlight yaml "linenos=table">}}
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
{{</highlight>}}
