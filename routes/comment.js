const router = require("express").Router();
const commentController = require("../controllers/comment_controller");

router.get("/:postId", commentController.getAllCommentsByPostId);

router.post("/postId", commentController.createCommentByPostId);

module.exports = router;
