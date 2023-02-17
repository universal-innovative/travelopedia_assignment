const mongoose = require("mongoose");

const touristSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too Short"],
      maxlength: [32, "Too long"],
    },
    email: {
      type: String,
      required: "Email is required",
    },

    destination: {
      type: String,
      required: true,
      default: null,
    },
    travellersCount: {
      type: Number,
      required: true,
      default: null,
    },
    totalBudget: {
      type: Number,
      required: true,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tourist", touristSchema);
