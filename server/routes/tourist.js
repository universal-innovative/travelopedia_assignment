const express = require("express");

// controllers
const {
  create,
  read,

  list,
} = require("../controllers/tourist");
// middleware

// --------------------------------------------------------------------

const router = express.Router();

// routes

router.post("/tourist/create", create);
router.get("/tourists/list", list);
router.get("/tourist/:id", read);

module.exports = router;
