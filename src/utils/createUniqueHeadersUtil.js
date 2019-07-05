import buildId from './buildIdUtil';
import { createCopyToClipboardEl } from './copyToClipboardUtil';

// Makes a URL-safe string
const urlKebabCase = string => encodeURI(buildId(string));

// Prepend an element before another
const prepend = (parent, elToPrepend) => {
  parent.insertBefore(elToPrepend , parent.firstChild);
}

const createUniqueHeaders = items => {
  // Note: 'nextItem' here is a single heading (h2)
  return items.reduce((item, nextItem) => {
    // Create kebabt url like this -> one-long-string
    const kebabUrl = urlKebabCase(nextItem.innerText);
    // Filter for duplicates
    const foundDuplicate = item.filter(a => urlKebabCase(a.innerText) === kebabUrl)
    if (foundDuplicate.length > 0) {
      // If duplicates found create an id attribute and add the length of duplicates as unique id to the id
      nextItem.id = `${kebabUrl}-${foundDuplicate.length}`;
    } else {
      // Create an id attribute
      nextItem.id = kebabUrl;
    }
    // Create element to contain the current h2's content
    const headingTxtEl = document.createElement('span');
    // Give it a class
    headingTxtEl.className = 'js-copy-icon-text'
    // Extract h2's content
    const headingTxt = nextItem.innerHTML;
    // Assign it to new element
    headingTxtEl.innerHTML = headingTxt;
    // And remove it from h2
    nextItem.innerHTML = '';
    // Append the new element to the now empty 'h2'
    nextItem.appendChild(headingTxtEl);
    // Prepend the created copy to clipboard element
    prepend(nextItem, createCopyToClipboardEl(nextItem.id));
    // Assign class to heading
    nextItem.className = nextItem.className || ' js-show-copy-icon';
    // Return headings with changes
    return [
      ...item,
      nextItem
    ]
  }, [])
}

export default createUniqueHeaders;
