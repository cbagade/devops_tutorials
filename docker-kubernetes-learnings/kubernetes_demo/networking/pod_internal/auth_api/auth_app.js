const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/token/:hashedPassword/:enteredPassword', (req, res) => {
  console.log('signup:: inside auth_app');
  const token = 'dummy_token';
  return res.status(200).json({ message: 'Token created.', token: token });

});

app.get('/hashed-password/:password', (req, res) => {
  // dummy hashed pw generation!
  console.log('login:: inside auth_app');
  const enteredPassword = req.params.password;
  const hashedPassword = enteredPassword + '_hash';
  res.status(200).json({ hashedPassword: hashedPassword });
});

app.listen(80);
