import PropTypes from 'prop-types';
import React from 'react';
import { ShowStaticMarkup } from 'react-storybook-addon-static-markup';

const children = (props) => {
  return (props.wide ?
  props.children
  : 
  (<div className="l-container">
    <main className="t-body-text">
      {props.children}
    </main>
  </div>));
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
    { props.noMarkup ? props.children : <ShowStaticMarkup>{children(props)}</ShowStaticMarkup>  }
  </section>
);

Wrapper.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  noMarkup: PropTypes.bool,
};

export default Wrapper;