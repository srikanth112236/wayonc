const client_collection = require('../../models/client');
const investor_collection = require('../../models/investers');
const user_collection = require('../../models/users');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { verificationDone } = require('../../emailTemplates/verificationDone');
require('dotenv').config();

const saltRounds = 10;

module.exports = async (req, res) => {
  const { id, name, email } = req.body;

  const compName = 'wayonc-';
  const random = Math.floor(1000 + Math.random() * 9000);
  const unique = id.substring(21, 24);
  const clientID = compName + unique + random;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_AUTH_USER,
      pass: process.env.GMAIL_AUTH_PASSWORD,
    },
  });

  client_collection
    .findOne({ _id: id })
    .then((result1) => {
      if (result1 === null) {
        res.send({ Status: 'User form not Submitted yet' });
      } else {
        if (result1.verification === true) {
          user_collection
            .findOne({ userEmail: email })
            .then((result2) => {
              if (result2 === null) {
                const dob = new Date(result1.clintInfo.dob).getFullYear();
                const name = result1.clintInfo.clientName;
                const namePass = result1.clintInfo.clientName.substring(0, 4);
                const password = namePass + dob;

                bcrypt.hash(password, saltRounds).then((hashPassword) => {
                  bcrypt.hash(email, saltRounds).then((hashEmail) => {
                    const newUser = new user_collection({
                      username: name,
                      authEmail: hashEmail,
                      userEmail: email,
                      password: hashPassword,
                    });
                    user_collection
                      .insertMany(newUser)
                      .then((result3) => {
                        client_collection
                          .findOneAndUpdate(
                            {
                              'bankInfo.email': result3[0].userEmail,
                            },
                            {
                              $set: {
                                clientID: clientID,
                                userAuth: hashEmail,
                              },
                            }
                          )
                          .then((result) => {
                            if (result === null) {
                              res.send({ Status: 'Form data not found' });
                            } else {
                              let mailClientOption = {
                                from: 'WayOnC Investments Pvt Ltd.<dineshroyc25@gmail.com>', // sender address
                                to: email, // list of receivers
                                subject: 'WayOnC Investments Pvt Ltd.', // Subject liners

                                text: 'Hello world?', // plain text body
                                html: verificationDone(name),
                              };

                              transporter.sendMail(
                                mailClientOption,
                                (err, info) => {
                                  if (!err) {
                                  } else {
                                    console.log(err);
                                  }
                                }
                              );

                              res.send({ Status: 'Success' });
                            }
                          })
                          .catch((e) => {
                            console.log(e);
                          });
                      })
                      .catch((e) => {
                        res.send({ Status: 'Registaration Failed' });
                      });
                  });
                });
              } else {
                res.send({ Status: 'User is already Registered' });
              }
            })
            .catch((e) => {
              console.log('User not found');
            });
        } else {
          res.send({
            Status: 'Please verify form data first then Register',
          });
        }
      }
    })
    .catch((e) => {
      res.send({ Status: 'User form not Submitted yet' });
    });
};
