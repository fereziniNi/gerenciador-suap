import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    nome: { type: String,  required: true },
    senha: {type: String, required: true}
}, { versionKey: false });


const admin = mongoose.model("admin", adminSchema);
export default admin;