import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageToggle = image =>
  classNames({
    'col-xs-12': true,
    'col-md-6': image,
    'col-md-8': !image
  });

const ArticleIntro = props => (
  <div className="row">
    <div className={imageToggle(props.image)}>
      <h1>{props.heading}</h1>
      <p className="t-intro">{props.lead}</p>
    </div>
    {props.image && (
      <div className="col-xs-12 col-md-6">
        <img src={props.image} aria-labelledby="intro-image-description" />
        <p className="t-image-text" id="intro-image-description">
          {props.imageDescription}
        </p>
      </div>
    )}
    <p className="b-article-info">
      <span className="b-article-info__text">
        Først publisert: {props.publishDate}
      </span>
      <span className="b-article-info__text">
        Sist endret: {props.editDate}
      </span>
      <a href="#" className="b-article-info__link l-mt-1">
        Se tidligere utgaver
      </a>
    </p>
  </div>
);

ArticleIntro.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
  publishDate: PropTypes.string,
  editDate: PropTypes.string,
  image: PropTypes.string,
  imageDescription: PropTypes.string
};

export default ArticleIntro;
