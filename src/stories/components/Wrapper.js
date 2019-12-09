import PropTypes from 'prop-types';
import React from 'react';
import { ShowStaticMarkup } from 'react-storybook-addon-static-markup';

const wrapperHtml = (children) => {
  return (
  <div className="l-container">
    <main className="t-body-text">
      {children}
    </main>
  </div>);
}

const renderMarkup = (opts) => {
  const { noMarkup, children } = opts;
  return noMarkup ? children : <ShowStaticMarkup>{children}</ShowStaticMarkup>
}

const Wrapper = props => (
  <section>
    <header className="b-wrapper__header">
      <div className="l-container">
        <div className="b-wrapper__header-inner">
          <h1 className="b-wrapper__title">{ props.title }</h1>
          { props.lead &&
            (<p>{props.lead}</p>)
          }
        </div>
      </div>
    </header>
    { props.wide ? 
      renderMarkup({
        children: props.children, 
        noMarkup: props.noMarkup
      }) 
    : wrapperHtml(renderMarkup({
      children: props.children, 
      noMarkup: props.noMarkup
    })) }
  </section>
);

Wrapper.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  noMarkup: PropTypes.bool,
};

export default Wrapper;