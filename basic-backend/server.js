import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      content:
        "Why did the tomato turn red? Because it saw the salad dressing!",
    },
    {
      id: 2,
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 3,
      content: "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      id: 4,
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 5,
      content:
        "Why don't skeletons fight each other? They don't have the guts!",
    },
  ];

  res.send(jokes);
});
app.listen(port, () => {
  console.log(`Server is Running at Port: ${port}`);
});
