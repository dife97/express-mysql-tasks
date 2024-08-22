import express from 'express';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("OK!")
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});