import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: [true, "Please use a unique username"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Account with this email exists"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        onelineInfo: {
            type: String
        }
    },
    { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users",UserSchema);

export default User;