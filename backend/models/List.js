const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  title: {
    type: "string",
    required: true,
    minLength: [2, "Title must be at least 2 characters"],
    maxlength: [20, "Title cannot be more than 20 characters"],
  },
  description: {
    type: "string",
    required: true,
    minLength: [2, "Description must be at least 2 characters"],
    maxlength: [100, "Description cannot be more than 20 characters"],
  },
  anime: {
    type: "array",
    default: [],
  },
});

const List = mongoose.model("List", listSchema);
module.exports = List;
