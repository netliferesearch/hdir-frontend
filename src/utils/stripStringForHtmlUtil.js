// Takes a string and strips all html tags in it
// https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
const stripStringForHtmlUtil = (string) => {
  const div = document.createElement("div");
  div.innerHTML = string;
  const strippedString = div.textContent || div.innerText || "";
  return strippedString;
}

export default stripStringForHtmlUtil;