const User = require('../models/users.model');

exports.followUser = async (req, res) => {
  try {
    const userIdToFollow = req.params.userId;

    await User.findByIdAndUpdate(
      req.user.id, 
      { $addToSet: { following: userIdToFollow } }
    );

    res.status(200).json({ message: 'User followed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const userIdToUnfollow = req.params.userId;

   
    await User.findByIdAndUpdate(
      req.user.id, 
      { $pull: { following: userIdToUnfollow } }
    );

    res.status(200).json({ message: 'User unfollowed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
