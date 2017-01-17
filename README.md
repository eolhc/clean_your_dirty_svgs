# clean_your_dirty_svgs


Typing the same html for each line of an svg is a pain so I made this.

This is my first time really using node... cool.

## Usage

1. Clone the repo
1. `npm install --save handlebars` or check out installation here (http://handlebarsjs.com/installation.html)
1. Paste in your svg lines into `your_svg.svg`
1. In `template.html`, customise the html that you want to replicate for each line of your svg in between the `{{each}}` tags
  * `{{{this}}}` is where your svg line will be generated
1. In Terminal, run `cleandirtysvg`
1. To view html output, open `output.html` in your favourite text editor
