const mongoose = require("mongoose");

const renterSchema = new mongoose.model({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  productId: {
    type: ObjectId,
  },
  duration: {
    type: Number,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

const Renter = mongoose.model("Renter", renterSchema);

module.exports = Renter;
