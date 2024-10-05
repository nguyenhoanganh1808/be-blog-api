const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createNameChain = () => {
  return body("name")
    .trim()
    .notEmpty()
    .withMessage("Name must not be empty")
    .isAlpha()
    .withMessage("Name must be in alpha bet");
};

exports.getAllCategories = asyncHandler(async (req, res) => {
  const allCategoriesList = await prisma.category.findMany();

  res.status(200).json(allCategoriesList);
});

exports.createCategory = [
  createNameChain(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
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

exports.updateCategoryById = [
  createNameChain(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    const { name } = req.body;
    const id = req.params.id;

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const newCategory = await prisma.category.update({
      where: { id: id },
      data: { name: name },
    });
    res.status(200).json(newCategory);
  }),
];

exports.deleteCategoryById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteCategory = await prisma.category.delete({ where: { id: id } });
  res.status(200).json(deleteCategory);
});
