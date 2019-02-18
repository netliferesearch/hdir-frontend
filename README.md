# Helsedirektoratet frontend

To install dependencies, run `npm install` in terminal.
To start the development environemnt run `npm run start`.
This will open the prototype at `localhost:3000` and Storybook (documentation) at `localhost:9009`.

This repository contains the main style and components for the new HDIR content platform.

This repository contains:
  - The main styles for Helsedirektoratet and Helfo.
  - Some javascript for the production webpage (i.e. search, header, scroll position sidebar).
  - Demonstrations of the page layouts.
  - React components, for creating building blocks the pages are built with, and the javascript.
  - Storybook, a tool for documenting, testing and presenting React components.
  - A mock server for HTTP endpoints serving JSON.

It should support IE11+ and two versions old or newer for the evergreen browsers.

It can also be found published on Netlify: http://hdir-frontend.netlify.com

## Building for Netlify
1. `npm install`
2. `npm run build`
3. Builds everything in the project to `/build`

## Building for Enonic
1. `npm install`
2. `npm run enonic-build`
3. Builds production-ready code to the `/build` directory
  - Helsedirektoratet CSS: `/build/App.css`, Helfo CSS: `Helfo.css`
  - JavaScript (Helsedirektoratet and Helfo): `/build/static/js/build.js`

## :clipboard: Rules

- All styles are written with SCSS (SASS)
- Follow the airbnb-sass-styleguide: https://github.com/airbnb/css
- Use the BEM methology: http://getbem.com/
- Classname prefixing rules: 
  - Blocks (BEM) are prefixed with `b-`
  - Layout classes are prefixed with `l-`
  - Typography classes are prefixed with `t-`
  - Some classes does not have a prefix, like headings and the grid, these are exception to the rules.
- By default the React components should be functions without state.
- Follow the WCAG 2.0 guidelines, with DIFI's modifications: https://uu.difi.no/krav-og-regelverk/wcag-20-standarden

### :package: Our SASS dependencies

- Normalize: https://github.com/JohnAlbin/normalize-scss
- Grid: https://hugeinc.github.io/flexboxgrid-sass/
- Media queries: https://github.com/sass-mq/sass-mq

### :police-officer: Styling rules

- Each component has 100% width. The grid decides the width of the component. The exception to this rule is `inline` and `inline-block` and `flex` elements, which has their width defined by their content or surroundings.
- A component should not decide its spacing around itself. There are 5 spacing units to choose from i.e. `l-mt-5`. 5 Is the largest unit, and will give the biggest spacing. `m` stands for margin and `t` for top. The four sides are called `t` `r` `b` `l`. It is prefered to always use margin top, unless it complicates things, if it does, use `l-mb-#`. 
- An element can not contain an element. It always go Block -> Element -> Modifier. BEM shouldn't care about how the DOM/HTML is nested.
