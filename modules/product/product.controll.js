import productmodel from "../../DB/models/productmodel.js"


//add product
const addproduct = async (req,res)=>{
    try {
        const {title ,Description ,price} =req.body
          const product =new productmodel({title ,Description ,price})
          const saveProduct = await product.save()
          if (saveProduct) {
            res.json({message:'Done',saveProduct})
          }else{
            res.json({message:'fail'})
          }

    } catch (error) {
        res.json({message:"catch",error})
    }
}

//update product
const updateProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const {title ,Description ,price} = req.body;
    const product = await productmodel.findOneAndReplace(
      { _id },
      {title ,Description ,price},
      { new: true }
    );
    // console.log(user);
    if (product) {
      res.json({ message: "updated done" ,product });
    } else {
      res.json({ message: "updated fail" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};

// delete product
const DeleteProduct = async(req,res)=>{
  try {
   const { _id } = req.params;
   const product =await productmodel.findByIdAndDelete({_id})
   if (product) {
       res.json({ message: "delete done"});
     } else {
       res.json({ message: "updated fail" });
     }

  } catch (error) {
   res.json({ message: "catch error", error });
  }
   
}

//get all products with their owner's information
 const getAllproductsWithUsers = async (req, res) => {
  try {
    const products = await productmodel.find({}).populate([{
      model:userModel,
      path:'createdBy',
      // select:['name', 'email']
      // select:'name email -_id'
    }]).select('title')
    if (products.length) {
      res.json({ message: "Done", products });
    } else {
      res.json({ message: "Fail" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
}


//get product by id
const getAllproduct = async (req, res) => {
  try {
    const {_id}=req.params
    const product = await productmodel.find({_id});
    if (product) {
      res.json({ message: "Done", Users: product });
    } else {
      res.json({ message: "There are no users" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};



export {addproduct , updateProduct ,DeleteProduct ,getAllproductsWithUsers,
getAllproduct}