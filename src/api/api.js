export const apiCall = (url) =>
  fetch(url).then(response => response.json());