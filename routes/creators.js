const router = require("express").Router();
const { getCreators } = require("../controllers/creators");

router.get("/", getCreators);

module.exports = router;
