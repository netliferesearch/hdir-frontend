// This component is just a 'placeholder' that mounts the scripts we need for
// generating the links on 'h2' headings

// Import dependencies
import { Component } from 'react';
// Import utilities
import createUniqueHeaders from './../utils/createUniqueHeadersUtil';
import scrollToTitleFromUrlHash from './../utils/scrollToTitleFromUrlHashUtil';

class GenerateLinksOnHeadings extends Component {
  componentDidMount(){
    // Initiate logic for scrolling to header/section based on hash in url
    scrollToTitleFromUrlHash();
  }
  componentDidUpdate(){
    // Initiate logic for scrolling to header/section based on hash in url
    scrollToTitleFromUrlHash();
  }
  render() {
    return null
  };
}

export default GenerateLinksOnHeadings;
