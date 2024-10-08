const yesOption = document.getElementById('yes-option');
const noOption = document.getElementById('no-option');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'likithlikithsd@gmail.com',
    pass: '9880458977'
  }
});

yesOption.addEventListener('click', () => {
  const mailOptions = {
    from: 'likithlikithsd@gmail.com',
    to: 'likithlikithsd@gmail.com',
    subject: 'Vaishnavi said YES!',
    text: 'Vaishnavi has agreed to talk to you!'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  alert('Thank you, Vaishnavi! I love you!');
});

noOption.addEventListener('click', (e) => {
  e.preventDefault();
  noOption.style.top = `${Math.random() * window.innerHeight}px`;
  noOption.style.left = `${Math.random() * window.innerWidth}px`;
  
  const mailOptions = {
    from: 'likithlikithsd@gmail.com',
    to: 'likithlikithsd@gmail.com',
    subject: 'Vaishnavi said NO!',
    text: 'Vaishnavi needs more space.'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  alert('I understand, Vaishnavi. I\'ll give you space.');
});
