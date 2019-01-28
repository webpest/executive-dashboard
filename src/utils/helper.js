const capitalize = text => {
  if (text && text.trim().length > 0) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\b\w/g, l => l.toUpperCase());
  }
};

export { capitalize };
