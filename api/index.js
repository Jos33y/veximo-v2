// server/index.js

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, "../front/build")));

app.get("/", function (_, res) {
    res.sendFile(
        path.join(__dirname, "../front/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});



app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});