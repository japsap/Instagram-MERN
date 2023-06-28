const router = require("express").Router();
const jwt = require('../utils/jsonwebtoken')

require('dotenv').config();

const authService = require("../services/authService");

router.post("/register", (req, res) => {
  const userProfilePicture =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";
  const userBio = "";

  const { username, email, password, repeatPassword } = req.body;

  const existingUser = authService.getUser(username);

  if (!existingUser) {
    return res
      .status(400)
      .json({ status: 400, message: "Username already used" });
  }

  if (password !== repeatPassword) {
    return res
      .status(400)
      .json({ status: 400, message: "Passwords don't match!" });
  }

  try {
    const user = authService.register(
      username,
      email,
      password,
      userProfilePicture,
      userBio,
    );
    res.status(201).json({ status: 201 });
  } catch (err) {
    const errors = Object.keys(err.errors).map(
      (keys) => err.errors[keys].message,
    );
    return res.status(404).json({ status: 404, error: errors });
  }
});

router.post("/login", async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  console.log(req.body);

  if (password !== repeatPassword) {
    return res
      .status(400)
      .json({ status: 400, message: "Passwords don't match!" });
  }

  try {
    const token = await authService.login(email, password);
    res.status(201).json({ status: 201, token });

  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 400, message: err.message });
  }
});


router.get("/login", async ( req, res) => {
    const token = req.headers['auth']

    await jwt.verify(token, process.env.JWT_SECRET)
      .then(info => res.json(info))
      .catch(err => res.json(err));
})



module.exports = router;
