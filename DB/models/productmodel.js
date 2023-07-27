import mongoose, {  Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
  
  },
  Description: String,
  price: Number,
  createdBy:{
    type: Schema.Types.ObjectId,
        ref:"User"
  }
}, {
    timestamps:true
});


const productmodel = mongoose.model('product' , productSchema)

export default productmodel