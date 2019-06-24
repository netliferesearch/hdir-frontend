import buildId from './buildIdUtil'
import copyToClipboard from './copyToClipboardUtil'

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
    ele.innerHTML = "#";
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
