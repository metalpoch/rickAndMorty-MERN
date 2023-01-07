import { Schema, model } from "mongoose";

const characters = new Schema(
  {
    _id: { type: Number, require: true },
    name: { type: String, require: true },
    status: { type: String, require: true },
    species: { type: String, require: true },
    gender: { type: String, require: true },
    origin: { type: String, require: true },
    location: { type: String, require: true },
    image: { type: String, require: true },
  },
  { versionKey: false }
);

const Characters = model("Characters", characters)

export default Characters
