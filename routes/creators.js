const router = require("express").Router();
const {
  getCreators,
  getCreator,
  addCreator,
  updateCreator,
  deleteCreator,
} = require("../controllers/creators");

router.get("/", getCreators);
router.get("/:id", getCreator);
router.post("/", addCreator);
router.put("/:id", updateCreator);
router.delete("/:id", deleteCreator);

module.exports = router;
