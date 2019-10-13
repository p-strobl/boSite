const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Object,
    amount: {
      type: Number,
    },
    unit: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  infos: {
    type: Object,
    kind: {
      type: String,
    },
    info: {
      type: String,
    },
  },
  preparation: {
    type: Object,
    step: {
      type: Number,
    },
    process: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Recipe", recipeSchema, "bollection");
