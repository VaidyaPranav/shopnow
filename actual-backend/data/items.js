const fs = require("node:fs/promises");

async function getStoredItems() {
  const rawFileContent = await fs.readFile("items.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  return {
    men: data.men ?? [],
    women: data.women ?? [],
    items: data.items ?? [],
    kids: data.kids ?? [],
    homeliving: data.homeliving ?? [],
    bueaty: data.bueaty ?? [],
  };
}

function storeItems(updatedData) {
  return fs.writeFile("items.json", JSON.stringify(updatedData, null, 2));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
