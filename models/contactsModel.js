import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      default: "john@doe.com",
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    avatarURL: {
      type: String,
      default: "/avatars/Unknown.png",
    },
    groups: {
      type: Array,
      default: ["favourites"],
    },
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

export { Contact };
