const nodeMailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendNotif(
  senderUser,
  targetUser,
  subject,
  messageContent,
  isHtml
) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });

  let content = {
    from: `"Roomie4Me Notification" <${process.env.SMTP_USERNAME}>`, // sender address
    replyTo: senderUser.email,
    to: `${targetUser.name.firstName} ${targetUser.name.lastName} <${targetUser.email}>`, // list of receivers
    unsubscribe: `https://bu.roomie4.me/`,
    subject: subject, // Subject line
  };

  if (isHtml) {
    content = { ...content, html: messageContent };
  } else {
    content = { ...content, text: messageContent };
  }

  // send mail with defined transport object
  let info = await transporter.sendMail(content);

  console.log(info);
}

module.exports = { sendNotif };
