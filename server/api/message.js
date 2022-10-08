//  import express from "express";
//   import bodyParser from 'body-parser';
  import nodemailer from 'nodemailer';
export default  defineEventHandler(async(data) => {

 
  // const app = express();
 
  
  // // 
  // app.use(bodyParser.urlencoded({ extended: false }))
  // app.use(bodyParser.json())
  
  // app.post('/message', async (req, res) => {
   
  // data=JSON.parse(data)
   
    const name =data.req.url.split('?')[1].split('&')[0].split('=')[1]
    const phone =data.req.url.split('?')[1].split('&')[1].split('=')[1]
    
     console.log('name:',name,"phone",phone,data.req.url)
   const contenuFormulaireContact = `
     <ul>
       <li>Имя: ${name}</li>
       <li>Телефон : ${phone}</li>
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
     subject: `Имя : ${name} телефон : ${phone} `, // Subject line
     text: '', // plain text body
     html: contenuFormulaireContact // html body
   })
  
   console.log('Message sent: %s', info.messageId)
   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
 
  //  res.redirect(200, '/contact')
 
  })