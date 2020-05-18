// Looks at the scroll position updates the active heading state based on the position
function findActiveHeading(headings, scrollPos, setActiveHeading) {
  // 20px gives us some headroom above the heading, so it always becomes active when linked to
  const headingSpace = 20;

  // Makes the nodeList to an array of htmlElements
  const htmlHeadings = [...headings];
  const scrolledPastItems = htmlHeadings.filter(
      h => h.offsetTop < scrollPos + headingSpace
  );
  // console.log(scrolledPastItems)

  return scrolledPastItems[scrolledPastItems.length - 1];
}

// Comparing hashes
const isHashNew = (oldHash, newHash) => oldHash !== newHash;

const updateUrl = () => {
  setTimeout(function () {
    const headings = [...document.querySelectorAll('.t-body-text h2')];
    const scrollTop = document.documentElement.scrollTop;
    const activeHeading = findActiveHeading(headings, scrollTop, setActiveHeading);
    const newHash = activeHeading ? `#${activeHeading.id}` : '';

    // Avoid setting new hash all the time (causing chrome to throttle it),
    // unless it is actually a new one
    if (isHashNew(window.location.hash, newHash)) {
        window.history.replaceState(null, null, newHash);
    }
  }, 100);
}

const setActiveHeading = (heading) => console.log(heading);

const setUrlOnWaypoint = () => document.addEventListener("scroll", updateUrl); 

export default setUrlOnWaypoint;