// node i nodemailer
// import thu vien
// App:Document, key:drtg cnuu bene tivs 
const express = require('express');
const mailer = require('nodemailer');
const app43 = express();  // tao doi tuong express
// tao thong tin nguoi
let transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        user:'quangnmph39820@fpt.edu.vn',
        pass:'drtg cnuu bene tivs'
    }
})
// noi dung can gui

let mailOption = {
    from:'quangnmph39820@fpt.edu.vn',
    to: 'nmq2807113@gmail.com',
    subject:'test mail',
    text:'Day la email gui ngay 17/7'
}

transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    } else {
        console.log("Thanh cong",info.messageId);
    }
})
app43.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});
