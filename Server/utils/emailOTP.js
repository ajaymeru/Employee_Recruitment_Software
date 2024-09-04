const nodemailer = require('nodemailer');
require('dotenv').config();


exports.generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

exports.transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSKEY
    }
});

exports.sendOTP = async (email, otp) => {
    await this.transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "OTP for Email Verification",
        text: `The one-time password (OTP) for validating your email id is ${otp}. It expires in 10 minutes.`
    });
};
