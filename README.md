# Helsedirektoratet frontend

To install dependencies, write `npm install` in terminal.
Then run the app by running `npm run`.

To open storybook, run `npm start storybook`.

This repository contains the main style and components for the new HDIR content platform.

It should support IE10+ and two versions old or newer for the modern browsers.

## :clipboard: Rules

- All styles are written with SCSS (SASS)
- Follow the airbnb-sass-styleguide: https://github.com/airbnb/css
- Use the BEM methology: http://getbem.com/
- All of the React-components has to be functional components (no state), because we will only be using the rendered markup.
- Follow the WCAG 2.0 guidelines, with DIFI's modifications: https://uu.difi.no/krav-og-regelverk/wcag-20-standarden

### :package: Our SASS dependencies

- Normalize: https://github.com/JohnAlbin/normalize-scss
- Grid: https://hugeinc.github.io/flexboxgrid-sass/
- Media queries: https://github.com/sass-mq/sass-mq

### :female-police-officer: Extra SASS rules

- A BEM-block is prefixed with `b-`, to show that it is a BEM-block.
- Each component has 100% width. The grid decides the width of the component. The exception to this rule is `inline` and `inline-block` elements, which has their width defined by their text.
- A component should not decide its spacing, relative to other components. This should be done in the layout.
- An element can not contain an element. It always go Block -> Element -> Modifier. BEM shouldn't care about how the DOM/HTML is nested.
