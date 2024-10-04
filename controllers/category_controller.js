exports.getAllCategories = (req, res) => {
  res.json({
    message: "get all categories",
  });
};

exports.createCategory = (req, res) => {
  res.send("create category");
};

exports.updateCategoryById = (req, res) => {
  res.send("update category");
};

exports.deleteCategoryById = (req, res) => {
  res.send("delete category");
};
