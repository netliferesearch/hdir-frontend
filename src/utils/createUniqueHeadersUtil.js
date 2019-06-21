import buildId from './buildIdUtil'

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
    // Added a onclick to all headers goint through this logic
    nextItem.onclick = () => {
      const urlToCopy = `${window.location.origin}${window.location.pathname}#${nextItem.id}`
      console.info(`NOT ACTIVATED => Copied ${urlToCopy} to clipboard`);
      // TODO: Uncomment to activate the copy to clipboard logic
      // // Copy the url for the heade clicked
      // copyToClipboard(urlToCopy)
    }
    return [
      ...item,
      nextItem
    ]
  },[])
}

export default createUniqueHeaders;
