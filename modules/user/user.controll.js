import userModel from "../../DB/models/usermodel.js"

//sign up
const adduser = async (req,res)=>{
    try {
        const {name ,email ,password ,gender ,age} =req.body
          const user =new userModel({name ,email ,password ,gender ,age})
          const saveUser = await user.save()
          if (saveUser) {
            res.json({message:'Done'})
          }else{
            res.json({message:'fail'})
          }

    } catch (error) {
        res.json({message:"catch",error})
    }
}

//sign in
const signIn = async (req,res)=>{
    try {
        const {email ,password } =req.body
          const user =await userModel.findOne({email ,password })
          if (user) {
            res.json({message:'Done',user})
          }else{
            res.json({message:'fail'})
          }

    } catch (error) {
        res.json({message:"catch",error})
    }
}

//getAllUsers
const getAllUsers = async (req, res) => {
    try {
      const users = await userModel.find();
      if (users) {
        res.json({ message: "Done", Users: users });
      } else {
        res.json({ message: "There are no users" });
      }
    } catch (error) {
      res.json({ message: "catch error", error });
    }
  };

//updateUser
 const updateOneMethod = async (req, res) => {
    try {
      const { _id } = req.params;
      const { name , age ,password  } = req.body;
      const user = await userModel.findOneAndReplace(
        { _id },
        { name , age ,password },
        { new: true }
      );
      // console.log(user);
      if (user) {
        res.json({ message: "updated done" ,user });
      } else {
        res.json({ message: "updated fail" });
      }
    } catch (error) {
      res.json({ message: "catch error", error });
    }
  };


//DeleteUser
const DeleteUser = async(req,res)=>{
   try {
    const { _id } = req.params;
    const user =await userModel.findByIdAndDelete({_id})
    if (user) {
        res.json({ message: "delete done"});
      } else {
        res.json({ message: "updated fail" });
      }

   } catch (error) {
    res.json({ message: "catch error", error });
   }
    
}

// get users with name start with x with age less than y
const SearchUserX = async (req, res) => {
  try {
    const { name , age ,password  } = req.body;
    // const {name}=req.params
    const users = await userModel.find({
      age:{$lt:age},
      name:{$like:`${A}%`}
    },{age });
    if (users) {
      res.json({ message: "Done", Users: users });
    } else {
      res.json({ message: "There are no users" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};

//- get users with name end with x
const nameEndx = async (req, res) => {
  try {
    const {name}=req.body
    const users = await userModel.find({
      name:{
        $like:`%${name}`
      }
    },{name});
    if (users) {
      res.json({ message: "Done" });
    } else {
      res.json({ message: "There are no users" });
    }
  } catch (error) {
    res.json({ message: "catch error", error:error });
  }
};



// get users with name contains x
const namecontainsx = async (req, res) => {
  try {
    const {name}=req.body
    const users = await userModel.find({
      name:{
        $like:`%${name}%`
      }
    },{name});
    if (users) {
      res.json({ message: "Done" });
    } else {
      res.json({ message: "There are no users" });
    }
  } catch (error) {
    res.json({ message: "catch error", error:error });
  }
};



export {adduser , getAllUsers,signIn ,updateOneMethod ,
DeleteUser ,SearchUserX , nameEndx ,namecontainsx}