import express from "express";
const app = express();
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

// 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/message', async (req, res) => {
  console.log(req.body)
   const data=req.body
 const contenuFormulaireContact = `
   <ul>
     <li>Имя: ${data.name}</li>
     <li>Телефон : ${data.phone}</li>
   </ul>
 `
 // NODEMAILER
 const transporter = nodemailer.createTransport({
   host: 'smtp.yandex.ru',
   port: 465,
   secure: true,
   auth: {
     user: 'stan-clinic',
     pass: '2022STAN-clinic'
   }
 })

 const info = await transporter.sendMail({
   from: '"Stan-clinic сообщение с сайта" <stan-clinic@yandex.ru>', // sender address
   to: 'stan-clinic@yandex.ru', // list of receivers
   subject: `Имя : ${data.name} телефон : ${data.phone} `, // Subject line
   text: '', // plain text body
   html: contenuFormulaireContact // html body
 })

 console.log('Message sent: %s', info.messageId)
 console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

 res.redirect(200, '/contact')
 })
 export default app;