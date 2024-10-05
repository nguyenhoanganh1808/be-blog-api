const router = require("express").Router();
const categoryController = require("../controllers/category_controller");

router.get("/", categoryController.getAllCategories);

router.post("/", categoryController.createCategory);

router.put("/:id", categoryController.updateCategoryById);

router.delete("/:id", categoryController.deleteCategoryById);

module.exports = router;
