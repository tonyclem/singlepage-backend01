const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    images: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    menSuit: { type: Boolean, required: true },
    womanSuits: { type: Boolean, required: true },
    menPants: { type: Boolean, required: true },
    womanPants: { type: Boolean, required: true },
    newProducts: { type: Boolean, required: true },
    bannerImages: { type: Boolean, required: true },
    categories: { type: Boolean, required: true },
    advertImages: { type: Boolean, required: true },
    scrollImages: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
