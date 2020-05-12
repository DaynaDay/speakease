// import user model
// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get all users
  async getAllUsers(req, res) {
    const users = await User.find();
    return res.json(users);
  },
  // get a single user by either their id or their username
  // if no param, get logged in user's data
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    })
      .populate('poems')
      .populate({
        path: 'collections',
        populate: {path: 'poems'}
      });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'No fingersnaps for you!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    console.log(body);
    const user = await User.findOne({ username: body.username })
      .populate('poems')
      .populate({
        path: 'collections',
        populate: {path: 'poems'}
      });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }
    console.log(user);
    const correctPw = await user.isCorrectPassword(body.password);
    console.log(correctPw)
    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
};
