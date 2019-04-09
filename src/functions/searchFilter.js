export const checkboxFilter = (checkboxes, checkboxGroupName) => {
  const checked = checkboxes.filter(box => box.checked);
  // Gets the search params/queries
  const searchParams = new URLSearchParams(window.location.search);
  // Removes all the params, of this name
  // MUTATION
  searchParams.delete(checkboxGroupName);
  // Adds the updates search params/query
  // MUTATION
  checked.forEach(c => {
    searchParams.append(checkboxGroupName, c.value);
  });
  const location = window.location.href.slice(
    0,
    window.location.href.indexOf('?') === -1
      ? window.location.href.length
      : window.location.href.indexOf('?')
  );

  const updatedUrlParams = new URL(`${location}?${searchParams.toString()}`);
  window.location = updatedUrlParams.toString();
};
