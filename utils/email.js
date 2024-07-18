// mailer.js
const nodemailer = require('nodemailer');
const { resetPassword } = require('../controllers/authController');

const sendEmail = (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'oviyasraj2001@gmail.com',
      pass: 'bzkzammlamqehafx'
    }
  });

  const mailOptions = {
    from: 'oviyasraj2001@gmail.com',
    to:'oviyasraj2001@gmail.com',
    subject:subject,
    text: text
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
