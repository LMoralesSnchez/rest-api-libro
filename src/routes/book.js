const { Router } = require("express");
const router = new Router();
const _ = require("underscore");

const book = require("../sample.json");
// console.log(book);
router.get("/", (req, res) => {
  res.json(book);
});

router.post("/", (req, res) => {
  const id = book.length + 1;
  const { title, Autor } = req.body;
  const newBook = { ...req.body, id };
  if (id && title && Autor) {
    // console.log(newBook);
    book.push(newBook);
    res.json(book);
  } else {
    res.json(error, "COMPLETAR!! title and autor");
  }
  // res.send("recevided");
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    _.each(book, (bok, i) => {
      if (bok.id == id) {
        book.splice(i, 1);
      }
    });
    res.json(book);
  }
});

module.exports = router;
