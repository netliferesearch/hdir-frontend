import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageToggle = (image, feature) =>
  classNames({
    'b-article-intro__text': true,
    'b-article-intro__text--with-image': image,
    'b-article-intro__text--feature': feature
  });

const imageWrapperClasses = feature =>
  classNames({
    'b-article-intro__image-wrapper': true,
    'b-article-intro__image-wrapper--feature': feature
  });

const ArticleIntro = props => (
  <div className="b-article-intro">
    <div className={imageToggle(props.image, props.feature)}>
      <h1>
        <div className="b-article-intro__topic">{props.topic}</div>
        {props.heading}
      </h1>
      <p className="b-article-intro__intro">{props.lead}</p>
    </div>
    {props.image && (
      <div className={imageWrapperClasses(props.feature)}>
        <div
          className="b-article-intro__image"
          style={{ backgroundImage: `url(${props.image})` }}
          role="img"
          aria-labelledby="intro-image-description"
        />
        {!props.feature && (
          <p
            className="b-article-intro__image-text"
            id="intro-image-description"
          >
            {props.imageDescription}
          </p>
        )}
      </div>
    )}
  </div>
);

ArticleIntro.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
  image: PropTypes.string,
  feature: PropTypes.bool,
  imageDescription: PropTypes.string,
  topic: PropTypes.string
};

export default ArticleIntro;
