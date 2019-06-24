import buildId from './buildIdUtil'
import copyToClipboard from './copyToClipboardUtil'

// The copy to clipboard icons
const svg = '<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'

// Makes a URL-safe string
const urlKebabCase = string =>
  encodeURI(buildId(string));

const createUniqueHeaders = items => {
  return items.reduce((item, nextItem)=>{
    // Create kebabt url like this -> one-long-string
    const kebabUrl = urlKebabCase(nextItem.innerText);
    // Filter for duplicates
    const foundDuplicate = item.filter(a => urlKebabCase(a.innerText) === kebabUrl)
    if (foundDuplicate.length > 0) {
      // If duplicates found create an id attribute and add the length of duplicates as unique id to the id
      nextItem.id = `${kebabUrl}-${foundDuplicate.length}`;
    }else{
      // Create an id attribute
      nextItem.id = kebabUrl;
    }

    // DOC https://stackoverflow.com/questions/5210033/using-only-css-show-div-on-hover-over-a

    const ele = document.createElement("span");
    ele.className = "js-copy-icon";
    ele.innerHTML = svg;
    // ele.id = "help";

    ele.onclick = () => {
      const urlToCopy = `${window.location.origin}${window.location.pathname}#${nextItem.id}`
      console.info(`Copied ${urlToCopy} to clipboard`);
      // Copy the url for the heade clicked…
      copyToClipboard(urlToCopy)
    }
    nextItem.appendChild(ele);
    nextItem.className = nextItem.className || '' + ' js-show-copy-icon'

    return [
      ...item,
      nextItem
    ]
  },[])
}

export default createUniqueHeaders;
