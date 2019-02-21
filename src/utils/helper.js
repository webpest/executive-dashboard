const capitalize = text => {
  if (text && text.trim().length > 0) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\b\w/g, l => l.toUpperCase());
  }
};

const fancynumber = num => {
  if (num >= 1000000000)
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  if (num >= 1000000)
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return num;
};

export { capitalize, fancynumber };
