import mongoose, { Document } from "mongoose";

export interface UserInterface extends Document {
  email: string;
  password: string;
  cart: { id: string; quantity: number }[];
}

const userSchema = new mongoose.Schema<UserInterface>({
  email: {
    type: String,
    required: [true, "Please enter an email address"],
  },
  password: {
    type: String, // Assuming your passwords are stored as strings (hashed or plaintext)
    required: true,
    default: "default-password", // Provide a default value if necessary
  },
  cart: {
    type: [{ id: String, quantity: Number }],
    default: [],
  },
});

const User = mongoose.model<UserInterface>("User", userSchema);

export default User;
