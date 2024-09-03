const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSKEY
    }
});

const generateOTP = () => {
    const sixdigit = Math.floor(100000 + Math.random() * 900000);
    return sixdigit;
};

const main = async (email) => {
    const otp = generateOTP();

    const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "OTP for Email Verification",
        text: `The one-time password (OTP) for validating your email id is ${otp}.`
    });

    console.log("Message sent: %s", info.messageId);
    console.log("OTP: %s", otp);
};

main('jvinodreddy308@gmail.com').catch(console.error);
