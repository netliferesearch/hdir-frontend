// This is a React specific component for this project.
// It makes the React router scroll to the top when navigating to a new page.

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default withRouter(ScrollToTop);
