const { Router } = require("express");
const router = new Router();

router.get("/test", (req, res) => {
  const data = {
    name: "Luis",
    apellido: "Morales",
  };
  res.json(data);
});

module.exports = router;
