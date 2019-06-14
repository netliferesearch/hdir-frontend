const buildId = text => {
  // Regex for special characters
  const rgx = /[;\\/:*!%?"()<>|&'_]/g;
  // If first character is a number add a string to the start
  if (!isNaN(text.charAt(0))) { text = `header-${text}` }
  return text.toLowerCase()
    // Replace spaces
    .replace(/\s+/g, '-')
    // Replace Norwegian spacial characters
    .replace(/æ+/g, 'ae')
    .replace(/ø+/g, 'o')
    .replace(/å+/g, 'aa')
    // Replace special characters
    .replace(rgx, '');
}

export default buildId;
