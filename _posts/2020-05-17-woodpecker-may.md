---
layout: post
title: New website!
author: Jeff
---

The very first edition of our subdivision newsletter!

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eros sed tellus tempor pharetra. Etiam at arcu consequat, ullamcorper urna et, vehicula nisl. Vivamus in diam ligula. Etiam dui turpis, sagittis sit amet tincidunt sagittis, pretium at dui. Integer cursus nunc nec nunc finibus interdum. Curabitur viverra magna at justo fermentum ultrices eu condimentum est. Mauris porta maximus metus in aliquam. Quisque commodo efficitur ante, non feugiat eros eleifend consequat. Quisque ut enim sed odio imperdiet tempus. Pellentesque efficitur sem eget elit finibus, id tincidunt enim bibendum. Praesent scelerisque ligula sit amet risus interdum auctor.


![]({{ '/assets/img/DSCN5601.JPG' | relative_url }} "An exemplary image")

An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Some footnote text.

Tables can look like this:

| Header1 | Header2 | Header3 |
|:--------|-------|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |

A horizontal rule follows.

***

Here's a definition list:

apples
  : Good for making applesauce.

oranges
  : Citrus!

tomatoes
  : There's no "e" in tomatoe.
