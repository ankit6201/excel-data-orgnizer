export const parseSEOData = (text) => {
  const categories = {};

  let currentCategory = null;

  const lines = text
    .split("\n")
    .map((line) => line.trimEnd())
    .filter(Boolean);

  lines.forEach((line) => {
    const parts = line.split("\t").filter(Boolean);

    // Category row
    if (
      parts.length >= 3 &&
      parts[1].toLowerCase().includes("traget url")
    ) {
      currentCategory = parts[0].trim();

      if (!categories[currentCategory]) {
        categories[currentCategory] = [];
      }

      return;
    }

    // Data row
    if (
      currentCategory &&
      parts.length >= 2 &&
      parts[0].startsWith("http")
    ) {
      categories[currentCategory].push({
        targetUrl: parts[0].trim(),
        approvedUrl: parts[1].trim(),
      });
    }
  });

  return categories;
};