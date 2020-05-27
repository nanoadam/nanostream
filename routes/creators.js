const router = require("express").Router();
const {
  getCreators,
  getCreator,
  newCreator,
  updateCreator,
  deleteCreator,
} = require("../controllers/creators");

router.get("/", getCreators);
router.get("/:id", getCreator);
router.post("/", newCreator);
router.put("/:id", updateCreator);
router.delete("/:id", deleteCreator);

module.exports = router;
