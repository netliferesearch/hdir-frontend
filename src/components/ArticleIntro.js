import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageMeta from './PageMeta';

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

const mainClasses = fullWidth =>
  classNames({
    'b-article-intro': true,
    'b-article-intro--full': fullWidth
  });

const ArticleIntro = ({ image, feature, topic, heading, lead, imageDescription, fullWidth, showDate }) => (
  <div className={mainClasses(fullWidth)}>
    <div className={imageToggle(image, feature)}>
      <h1>
        { topic ? (
          <div className="b-article-intro__topic">{topic}</div>
        ) : null}
        {heading}
      </h1>
      
    </div>
    {image && (
      <div className={imageWrapperClasses(feature)}>
        {!feature ? (
          <>
          <div>
              <img
                className="b-article-intro__image"
                src={image}
                alt={imageDescription}
                aria-labelledby="intro-image-description"
              />
              <p
                className="b-article-intro__image-text"
                id="intro-image-description"
              >
                {imageDescription}
              </p>
            </div>
          </>
        ) : (
          <>
            <div
              className="b-article-intro__image"
              style={{ backgroundImage: `url(${image})` }}
              role="img"
              aria-labelledby="intro-image-description"
            />
            <div className="visually-hidden" id="intro-image-description">
              {imageDescription}
            </div>
          </>
        )}
      </div>
    )}
    {
      showDate &&
      (
        <PageMeta publishDate="16.09.2020" editDate="16.09.2020" />
      )
    }
    <p className="b-article-intro__intro">{lead}</p>
  </div>
);

ArticleIntro.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
  image: PropTypes.string,
  feature: PropTypes.bool,
  imageDescription: PropTypes.string,
  topic: PropTypes.string,
  showDate: PropTypes.bool
};

export default ArticleIntro;
