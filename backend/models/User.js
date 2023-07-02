const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: "string",
      required: true,
      minLength: [2, "Name must be at least 2 characters"],
      maxlength: [20, "Name cannot be more than 20 characters"],
    },
    lastName: {
      type: "string",
      required: true,
      minLength: [2, "Name must be at least 2 characters"],
      maxlength: [20, "Name cannot be more than 20 characters"],
    },
    phoneNumber: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.verfiyPasswords = function (password) {
  console.log("verifying password: ", password);
  console.log("verifying password: ", this.password);
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
