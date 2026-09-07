import { Schema, model} from "mongoose";

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true},
    password: String,
})

// Exportação para a api sobre o nome do modelo: 'user' com a forma: 'userSchema'
export default model("User", userSchema);