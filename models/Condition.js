import mongoose from "mongoose";

const conditionSchema = new mongoose.Schema({
  region: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  homeOwner: {
    type: String,
    required: true,
  },
  employee: {
    type: String,
    required: true,
  },
  adres: {
    type: String,
    required: true,
  },
  mfy: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  shortcomings: {
    type: [{}],
    required: true,
  },
});

const Condition = new mongoose.model("Condition", conditionSchema);

export default Condition;
