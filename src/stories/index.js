import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withNotes } from "@storybook/addon-notes";

import { Welcome } from "@storybook/react/demo";
import ContentLabel from "../components/ContentLabel";
import FeatureList from "../components/FeatureList";

// Pages
import FrontPage from "../pages/FrontPage";
import SearchResultPage from "../pages/SearchResultPage";
import ArticlePage from "../pages/ArticlePage";

// React specific
import InputSearch from "../components/InputSearch";

import { featureListHeading, featureListData } from "../testData.js";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("FeatureList", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup(
    "Basic",
    withNotes("A very simple component")(() => (
      <FeatureList
        heading={text("Heading", featureListHeading)}
        list={featureListData}
        icon={boolean("Show icon", true)}
      />
    ))
  );

storiesOf("ContentLabel", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Basic", () => (
    <ContentLabel>{text("Text", "nasjonal faglig retningslinje")}</ContentLabel>
  ));

storiesOf("InputSearch", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Basic", () => (
    <InputSearch dark={boolean("Dark mode", false)} />
  ));

storiesOf("Pages", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Front page", () => <FrontPage />)
  .addWithStaticMarkup("Search result page", () => <SearchResultPage />)
  .addWithStaticMarkup("Article page", () => <ArticlePage />);
