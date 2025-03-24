const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
//   port: 587,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "serverdata516@gmail.com",
    pass: "avlvzrebujvjgmal",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to,subject,text) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'serverdata516@gmail.com', // sender address
    to, // list of receivers
    subject, // Subject line
    text // plain text body
      // html body
  });
}
// main().catch(console.error);
module.exports={sendMail}