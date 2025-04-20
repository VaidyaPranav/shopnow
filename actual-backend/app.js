const express = require("express");
const bodyParser = require("body-parser");

const { getStoredItems, storeItems } = require("./data/items");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/men", async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ men: storedItems.men });
});

app.get("/items", async (req, res) => {
  const storedItems = await getStoredItems();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 4000));
  res.json({ items: storedItems.items });
});
app.get("/women", async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ women: storedItems.women });
});
app.get("/kids", async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ kids: storedItems.kids });
});
app.get("/homeliving", async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ homeliving: storedItems.homeliving });
});
app.get("/bueaty", async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ bueaty: storedItems.bueaty });
});

app.get("/items/:id", async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post("/items", async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: "Stored new item.", item: newItem });
});

app.listen(3030);
