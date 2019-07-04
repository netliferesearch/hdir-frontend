// This component is just a 'placeholder' that mounts the scripts we need for
// generating the links on 'h2' headings

// Import dependencies
import { Component } from 'react';
// Import utilities
import createUniqueHeaders from './../utils/createUniqueHeadersUtil';
import scrollToTitleFromUrlHash from './../utils/scrollToTitleFromUrlHashUtil';

class GenerateLinksOnHeadings extends Component {
  componentDidMount(){
    // Find all h2 headers and add unique ids
    createUniqueHeaders([...document.querySelectorAll('h2')]);
    // Initiate logic for scrolling to header/section based on hash in url
    scrollToTitleFromUrlHash();
  }
  componentDidUpdate(){
    // Find all h2 headers and add unique ids
    // Running it on component update as well, to trigger new header IDs on router change
    createUniqueHeaders([...document.querySelectorAll('h2')]);
    // Initiate logic for scrolling to header/section based on hash in url
    scrollToTitleFromUrlHash();
  }
  render() {
    return null
  };
}

export default GenerateLinksOnHeadings;
