const User = require("../models/User");
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

exports.postRegister = async (req, res) => {
  const checkEmail = await User.findOne({ email: req.body.email });

  if (checkEmail) {
    res.status(401).json("Email đã tồn tại!");
  } else {
    try {
      const newUser = User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString(),
      });

      newUser.userInformation = {};
      newUser.userInformation.username = req.body.username;

      console.log(newUser);
      const user = await newUser.save();
      res.status(200).json({ user, message: "Đăng kí thành công!" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

exports.postLogin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Tài khoản hoặc mật khẩu không chính xác!");

    var bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    var originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Tài khoản hoặc mật khẩu không chính xác!");

    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

    const dataToken = {
      id: user._id,
      email: user.email,
      isAdmin: user.userInformation.isAdmin,
    };

    const accessToken = jwt.sign(dataToken, accessTokenSecret, {
      expiresIn: "3h",
    });

    if (!accessToken) {
      return res.status(401).json("Đăng nhập không thành công!");
    }
    let refreshToken = user.refreshToken;

    if (!refreshToken) {
      refreshToken = jwt.sign(dataToken, accessTokenSecret, {
        expiresIn: "30d",
      });
      user = await User.updateOne(
        { _id: user._id },
        { refreshToken: refreshToken }
      );
    }

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const accessTokenFromHeader = req.headers.token.split(" ")[1];
    if (!accessTokenFromHeader) {
      return res.status(400).json("Không tìm thấy token");
    }
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
      return res.status(400).send("Không tìm thấy refresh token.");
    }

    const decodeToken = await jwt.verify(
      accessTokenFromHeader,
      accessTokenSecret
    );

    if (!decodeToken) {
      return res.status(400).send("Access token không hợp lệ.");
    }

    const id = decodeToken.id; // Lấy username từ payload

    const user = await User.findById(id);
    if (!user) {
      return res.status(401).send("User không tồn tại.");
    }

    if (refreshToken !== user.refreshToken) {
      return res.status(400).send("Refresh token không hợp lệ.");
    }

    const dataToken = {
      id: user._id,
      email: user.email,
      isAdmin: user.userInformation.isAdmin,
    };

    const accessToken = jwt.sign(dataToken, accessTokenSecret, {
      expiresIn: "3h",
    });

    if (!accessToken) {
      return res.status(401).json("Đăng nhập không thành công!");
    }

    res.status(200).json({ accessToken });
  } catch (err) {
    res.status(500).json("Tái đăng nhập không thành công!");
  }
};
