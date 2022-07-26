const User = require("../models/User");

const userController = {
  //GET ALL USERS
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json(err);
    }
  },

  //DELETE USER
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json({"message":"Delete successfully !"});
    } catch (err) {
      res.status(500).json({"message":"Can't find this user !"});
    }
  },
};

module.exports = userController;
