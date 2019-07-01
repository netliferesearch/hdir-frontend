// This component is just a 'placeholder' that mounts the scripts we need for
// generating the links on 'h2' headings

// Import dependencies
import { Component } from 'react';
// Import utilities
import scrollToTitleFromUrlHash from './../utils/scrollToTitleFromUrlHashUtil'
import createUniqueHeaders from './../utils/createUniqueHeadersUtil'

class GenerateLinksOnHeadings extends Component {
  componentDidMount(){
    // Initiate logic for scrolling to header/section based on hash in url
    scrollToTitleFromUrlHash()
    // Find all h2 headers and add unique ids
    createUniqueHeaders([...document.querySelectorAll('h2')]);
  }
  render() {
    return null
  };
}

export default GenerateLinksOnHeadings;
