import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title not given"],
        unique: true,
    },
    date: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: [true, "Banner image is Required"]
    },
    Story: {
        type: String
    }
},{timestamps: true})

const Journal = mongoose.models.journals ||  mongoose.model("journals",journalSchema);

export default Journal;