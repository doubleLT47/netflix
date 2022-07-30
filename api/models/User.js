const mongoose = require("mongoose");

const UserInformationSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    birthDay: {
      type: String,
      required: false,
      default: "01/01/2003",
    },
    desc: {
      type: String,
      required: false,
    },
    others: {
      type: Array,
      required: false,
    },
  },
  {
    _id: false,
  }
);

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /* /.+\@.+\..+/ */ [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Invalid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    userInformation: UserInformationSchema,
    refreshToken: {
      type: String,
    },
    loginFailedCount: {
      type: Number,
      required: true,
      max: 5,
      default: 0,
    },
    lockState: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
