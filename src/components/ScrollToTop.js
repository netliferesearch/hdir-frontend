// This is a React specific component for this project.
// It makes the React router scroll to the top when navigating to a new page.

import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = React.memo(props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <>{props.children}</>;
});

export default withRouter(ScrollToTop);
