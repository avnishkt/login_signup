const router = require("express").Router();
const {
    user_all, 
    user_details, 
    user_create, 
    user_update, 
    user_delete,
    user_matched
  } = require('../controllers/userController');

router.post("/", user_create);
router.get("/", user_all);
router.get("/:userId",user_details);
router.put("/:userId", user_update);
router.delete("/:userId", user_delete);
router.post("/login", user_matched);

module.exports = router;