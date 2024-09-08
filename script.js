const yesOption = document.getElementById('yes-option');
const noOption = document.getElementById('no-option');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

yesOption.addEventListener('click', () => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'likithlikithsd@gmail.com',
    subject: 'Vaishnavi said YES!',
    text: 'Vaishnavi has accepted your date invitation!'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

noOption.addEventListener('click', (e) => {
  e.preventDefault();
  noOption.style.top = `${Math.random() * window.innerHeight}px`;
  noOption.style.left = `${Math.random() * window.innerWidth}px`;
  
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'likithlikithsd@gmail.com',
    subject: 'Vaishnavi said NO!',
    text: 'Vaishnavi has declined your date invitation!'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
