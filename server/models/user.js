const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const nodemailer = require("nodemailer");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExpiration: Date,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

userSchema.methods.generatePasswordResetToken = function () {
  const resetToken = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1h",
  });
  this.resetToken = resetToken;
  this.resetTokenExpiration = Date.now() + 3600000; // 1 hour from now
  return resetToken;
};

userSchema.methods.sendPasswordResetEmail = function () {
  const resetToken = this.generatePasswordResetToken();
  const resetUrl = `http://your-reset-url/${resetToken}`; // Replace with your actual reset URL

  const transporter = nodemailer.createTransport({
    // Configure your email provider here
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "your-email@example.com",
    to: this.email,
    subject: "Password Reset",
    text: `Click the following link to reset your password: ${resetUrl}`,
  };

  return transporter.sendMail(mailOptions);
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
