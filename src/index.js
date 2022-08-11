const { json } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");

// setting
app.set("port", process.env.PORT || 3000);
// app.set("json spaces", 2);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(require("./routes"));
app.use("/api/book", require("./routes/book"));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`server success, puerto ${3000}`);
});
