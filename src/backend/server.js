var nodemailer = require("nodemailer");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
var app = express("express");

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { where, description, subject } = req.body;
  console.log(req.body);
  var trasnporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    post: 465,
    secure: true,
    auth: {
      user: "moalmiguel@gmail.com",
      pass: "qbwtnzutlfgjcbqr",
    },
  });

  var mailOptions = {
    form: "Mexflix",
    to: where,
    subject,
    text: description,
  };

  trasnporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("Email enviado");
      res.status(200).json({ ok: true });
    }
  });
});

app.listen(8080, () => {
  console.log("servidor corriendo en el puerto 8080");
});
