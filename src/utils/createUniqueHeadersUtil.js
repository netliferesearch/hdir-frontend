import buildId from './buildIdUtil';
import copyToClipboard from './copyToClipboardUtil';
import clp from './consoleLogPlusUtil';

// Makes a URL-safe string
const urlKebabCase = string => encodeURI(buildId(string));

const createUniqueHeaders = items => {
  clp({
    prefix: 'createUniqueHeaders',
    message: 'About to start creating unique header links',
    type: 'info',
  })
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

    // DOC https://stackoverflow.com/questions/5210033/using-only-css-show-div-on-hover-over-a

    // Create element to contain click-able hash symbol
    const ele = document.createElement('span');
    ele.className = "js-copy-icon";
    ele.innerHTML = "#";
    // Create element to contain the current h2's text
    // Extract h2's text, assign it to new element and remove it from h2
    // Append the new element to the now empty 'h2'
    const headingTxtEl = document.createElement('span');
    headingTxtEl.className = 'js-copy-icon-text'
    const headingTxt = nextItem.innerHTML;
    headingTxtEl.innerHTML = headingTxt;
    nextItem.innerHTML = '';
    nextItem.appendChild(headingTxtEl);

    ele.onclick = () => {
      const urlToCopy = `${window.location.origin}${window.location.pathname}#${nextItem.id}`
      console.info(`Copied ${urlToCopy} to clipboard`);
      // Copy the url for the heade clicked…
      copyToClipboard(urlToCopy)
    }

    function prepend(parent, ele) {
      parent.insertBefore(ele , parent.firstChild);
    }

    prepend(nextItem, ele);
    nextItem.className = nextItem.className || ' js-show-copy-icon';

    return [
      ...item,
      nextItem
    ]
  }, [])
}

export default createUniqueHeaders;
