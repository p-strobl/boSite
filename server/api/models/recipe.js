const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: {
    type: Array,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  ingredients: {
    type: Object,
    ingredient: {
      type: Object,
      unit: {
        type: String,
      },
      amount: {
        type: Number,
      },
    },
  },
  infos: {
    type: Object,
    duration: {
      type: Object,
      text: {
        type: String,
      },
      from: {
        type: Number,
      },
      to: {
        type: Number,
      },
      total: {
        type: Number,
      },
    },
    info: {
      type: String,
    },
  },
  preparation: {
    type: Array,
  },
  images: {
    type: Object,
    url: {
      type: Array,
    },
  },
});

module.exports = mongoose.model("Recipe", recipeSchema, "bollection");
