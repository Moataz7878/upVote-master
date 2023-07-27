import mongoose, {  Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  password: String,
  gender: {
    type: String,
    enum: ["female", "male"]
  },
  age: Number
}, {
    timestamps:true
});


const userModel = mongoose.model('User' , userSchema)

export default userModel