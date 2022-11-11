
const User= require('../model/user');
const bcrypt= require("bcrypt");


// Get All products
const user_all = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single user
const user_details = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New user
 const user_create = async (req, res) => {
  // bcrypt.hash(req.body.password, 10, function(err, hash) {
  //   if(err){
  //       return res.json({
  //           message:"Something wrong ,please try again later!",
  //           error:err
  //       });
  //   }else{
        

  const user = new User({
    name: req.body.name,
    class: req.body.class,
    email: req.body.email,
    password: req.body.password
  });
    
  
  

  try {
    const savedUser = await user.save();
    res.send(savedUser);
    console.log("presenting the address");
  } catch (error) {
    res.status(400).send(error);
  };

 }
     

// Update user
const user_update = async (req, res) => {
    try {
        const user = {
          name: req.body.name,
          class: req.body.class,
          email: req.body.email,
          password: req.body.password
        };
    
        const updatedUser = await User.findByIdAndUpdate(
          { _id: req.params.userId },
          user
        );
        res.json(updatedUSer);
      } catch (error) {
        res.json({ message: error });
      }
};


//login to the user
const user_matched = async (req, res) => {
  try {
      const user = {
        name: req.body.name,
         class: req.body.class,
        email: req.body.email,
        password: req.body.password
      };
  
      const matchedUser = await User.find(email)
      
        
      
      res.json(matchedUser);
    } catch (error) {
      res.json({ message: error });
    }
};

// Delete user
const user_delete = async (req, res) => {
    try {
        const removeUser = await User.findByIdAndDelete(req.params.userId);
        res.json(removeUser);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    user_all, 
    user_details, 
    user_create, 
    user_update, 
    user_delete,user_matched
  }
