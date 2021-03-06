# Helsedirektoratet frontend

## This repository contains:

- The main styles for Helsedirektoratet and Helfo.
- Some javascript for the production webpage (i.e. search, header, scroll position sidebar).
- Demonstrations of the page layouts.
- React components, for creating building blocks the pages are built with, and the javascript.
- Storybook, a tool for documenting, testing and presenting React components.
- A mock server for HTTP endpoints serving JSON.
- It is built with create-react-app

It should support IE11+ and two versions old or newer for the evergreen browsers.

It can also be found published on Netlify: http://hdir-frontend.netlify.com

## Merge Flow

Develop new features on separate feature-branches, using the following naming pattern: `HDF-123_name_of_task`. When ready for testing, merge into `test` branch.

The next step is a staging/review branch called `develop`. This is used to separate the `test` stuff (where all kinds of features and fixes may be) from specific features being developed for a certain time period. 

The final step is the `master` branch. This branch should always correspond to what is ready for, or in, production. 

Always use Pull Requests to merge between the branches when developing new features.

## Development

1. `npm install`
2. `npm run start`
3. This will open the prototype at `localhost:3000` and Storybook (documentation) at `localhost:9009`.

## Building and deployment

1. `npm install`
2. `npm run build`
3. Builds everything in the project to `/build`

You don't need to build before a deployment. Netlify will build and deploy automatically when pushing to the master branch.

Netlify will also automatically create a new enviroment for other branches. It will get a random generated URL, found in Netlify in the deployment section.

## Visual regression testing with Loki

When doing styling changes that might affect the project in unexpected places, you should run the automated visual regression tool.

Loki takes screenshots off all the components in Storybook (update) and stores them as references. After doing the styling changes you can run Loki again (update) to compare the current state with the last one. Loki will highlight the changes in the generated output images.

1. Create reference images: `npx loki update --port 9009`
2. Compare changes with the reference: `npx loki test --port 9009`

Be careful not to run update when you want to run the test, because it will override the old reference.

## Project rules

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

### Styling rules

- Each component has 100% width. The grid decides the width of the component. The exception to this rule is `inline` and `inline-block` and `flex` elements, which has their width defined by their content or surroundings.
- An element can not contain an element. It always go Block -> Element -> Modifier. BEM shouldn't care about how the DOM/HTML is nested.

### SASS dependencies

- Normalize: https://github.com/JohnAlbin/normalize-scss
- Grid: https://hugeinc.github.io/flexboxgrid-sass/
- Media queries: https://github.com/sass-mq/sass-mq
- SASS-SVG-URI: https://github.com/waldemarfm/sass-svg-uri

## Building for Enonic

1. `npm install`
2. `npm run enonic-build`
3. Builds production-ready code to the `/build` directory

- Helsedirektoratet CSS: `/build/App.css`, Helfo CSS: `Helfo.css`
- JavaScript (Helsedirektoratet and Helfo): `/build/static/js/build.js`

The javascript is a collection of apps that can render, and read the data attributes, to the following containers:

- `#header`
  - `data-name` (string) Name of the webpage (used for alt in logo)
  - `data-label` (string) A string for the label to the input-field
  - `data-hide-search` (boolean, remove it to make it false) Used to hide the search button in the header for the frontpage and search page.
  - `data-links` (string) JSON representing the links. An array of objects with the props `name` and `href`.
  - `data-example-suggestions` (string) JSON array with strings `["a", "b", "c"]`
- `#search`
  - `data-dark` (boolean, remove it to make it false) If the search is placed on a dark background.
  - `data-label` (string) A string for the label to the input-field
  - `data-hide-suggestions` (boolean, remove it to make it false) If we don't want suggestions.
  - `data-example-suggestions` (string) JSON array with strings `["a", "b", "c"]`
- `#sectionSidebar`
  - `data-heading` (string) Heading for the sidebar
  - `data-icon` (string) Icon for the sidebar
  - `data-heading-url` (string) A link to another page
  - `data-list` (string) JSON representing the links. An array of objects with the props. Example below:

  ```
  data-list='[{"title":"KAPITTEL 1","url":"#","description":"Kost og fysisk aktivitet ved svangerskaps-diabetes","children":[{"description":"Underkapittel","active":true,"url":"#","prefix":"1.1"},{"description":"Underkapittel","url":"#","prefix":"1.2"}]},{"title":"KAPITTEL 2","url":"#","description":"Diagnostikk og tiltak"},{"title":"KAPITTEL 3","url":"#","description":"Nytt kapittel"}]'
  ```
- `#globalScopeScripts`
  - This element should be present directly under `body`, preferably as `body`'s last child.
  - Two standalone components are loaded through this element: `Loading` and `GlobalScopeScripts`, as both should be made available at the highest level in the **DOM tree**.
- `.js-multi-selector` (can be used multiple times on a page)
  - `data-button-text` (string) The text in the button for opening the list of checkboxes.
  - `data-confirm-text` (string) The text in the button that triggers the filters
  - `data-checkbox-group-name` (string) Name of the checkbox group. Same as the search query key.
  - `data-options` (string) JSON array of checkboxes:

  ```
  data-options='[{"value":"urlEncodedValue","label":"Human readable lable","checked":false}]'
  ```

  - The objects in the array has the props: `value`, `label` and `checked` (this is a boolean).
  - The value should be url encoded.
  - The JSON string (data-options) decides which checkbox is currently filtering, not the URL.

- `#product-search`
  - Typically placed on product front pages and chapter pages.
  - Works indenpendently as long as it has its attributes.
  - `data-label` (string) label element for search field
  - `data-content-id` (string) which content should the search be performed in
  - `data-collapsed` (bool) Should be collapsed per default, when in chapter pages
  - `data-malgruppe` (string) filter results by malgruppe attribute
  - `data-flatTree` (string) JSON array of content structure
  - `data-endpoint` (string) URL to search endpoint

- `#list-search`
  - For searching on list pages
  - Works indenpendently as long as it has its attributes.
  - `data-label` (string) label element for search field
  - `data-content-id` (string) which content should the search be performed in
  - `data-collapsed` (bool) Should be collapsed per default, when in chapter pages
  - `data-malgruppe` (string) filter results by malgruppe attribute
  - `data-flatTree` (string) JSON array of content structure
  - `data-tema` (string) filter by theme
  - `data-type` (string) filter by type

## Handoff to Enonic

We need to generate static HTML pages (using react-snap), one static build of an earlier commit, and one from the current. We run a diffing tool to highlight all the changes in the generated HTML.

1. Go to an earlier commit, the commit you want to compare. Run `npm run build`.
2. Run `create-static-pages` and copy `build/static_pages`.
3. Go to the current commit, go to the directory `old_static_version` and delete the directory there, if there are any, and paste the copied directory in there.
4. Run `npm run build && npm run create-static-pages && npm run diff-static-versions`
   - This builds the project, generate static prerendered HTML pages, and creates a HTML diff-file.
5. Open `/public/diff.html` to see the changes.
   - The new diffs includes the date in the filename.
