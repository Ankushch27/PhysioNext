const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodeMailer = require('nodemailer');

admin.initializeApp();

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ankushch2712@gmail.com',
    pass: 'rampalsingh'
  }
});

exports.sendEmail = functions.firestore.document('order').onCreate(doc => {
  const data = doc.data();
  const mailOptions = {
    from: '93smarty@gmail.com',
    to: '93smarty@gmail.com',
    subject: 'Test email',
    html: `<p>Hi, Great news! Someone just booked one of your services. Here are the details:</p>
    <h2>Customer Info</h2>
    <strong>Name: </strong><p>${data.name}</p>
    <strong>Email: </strong><p>${data.email}</p>`
  };

  return transporter
    .sendMail(mailOptions)
    .then(res => console.log('Email sent!', res))
    .catch(err => console.log(err));
});

exports.userCreated = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotification(notification);
    });
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('User created', doc));
};
