const User = require("../model/User");

module.exports = {
  postSignup: async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        console.log('user found')
        return res.status(400).json({ error: "User already exists. Try a new email", status : 400 });
      }


      const user = new User({
        name: name,
        email: email,
        password: password,
        role: false,
      });

      await user.save();

      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ error: "Internal Server Error" , status : 400});
        }
        return res.status(200).json({ message: "Signup successful", status : 200 });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error", status : 500 });
    }
  },
};
