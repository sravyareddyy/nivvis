const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pittaimp17@gmail.com',  
    pass: 'pxgw sitv esyt jrwb'    
  }
});
app.post('/send-email', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'sravyareddyy17@gmail.com',  // Recipient's email address
    subject: subject,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully.');
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
