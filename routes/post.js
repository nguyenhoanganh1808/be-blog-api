const router = require("express").Router();
const postController = require("../controllers/post_controller");

router.get("/", postController.getAllPosts);

router.post("/", postController.createPost);

router.get("/:id", postController.getPostById);

router.post("/:id", postController.updatePostById);

module.exports = router;
