const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));

app.get('/api/article/:name', async (req, res) => {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernblog");
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to dataBase", error });
  }
});
app.post("/api/article/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articleInfo[articleName].comments.push({ username, text });
  res.status(200).send(articleInfo[articleName]);
});

app.listen(PORT, () => console.log(`server started at port ${8000}`));
