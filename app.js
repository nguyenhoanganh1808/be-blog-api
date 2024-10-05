const express = require("express");
require("dotenv").config();

const routes = require("./routes");

const app = express();

// parses form payloads and sets it to the `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1/categories", routes.category);
app.use("/v1/posts", routes.post);
app.use("/v1/posts/:postId/comments", routes.comment);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server connect to port ${PORT}`));
