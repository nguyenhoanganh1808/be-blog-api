const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllCategories = (req, res) => {
  res.json({
    message: "get all categories",
  });
};

exports.createCategory = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name must not be empty")
    .isAlpha()
    .withMessage("Name must be in alpha bet"),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);
    const { name } = req.body;

    // If have error
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const newCategory = await prisma.category.create({
      data: {
        name: name,
      },
    });

    res.status(200).json(newCategory);
  }),
];

exports.updateCategoryById = (req, res) => {
  res.send("update category" + req.params.id);
};

exports.deleteCategoryById = (req, res) => {
  res.send("delete category");
};
