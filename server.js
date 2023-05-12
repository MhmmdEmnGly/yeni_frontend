const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const LocalStorage = require('node-localstorage').LocalStorage;

// const localStorage = new LocalStorage('./local-storage');

// localStorage.setItem('username', 'john_doe');
// console.log(localStorage.getItem('username'));

// middleware'lerin eklenmesi
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// app.post('/esp32Verileri', (req, res) => {

//     const localStorage = new LocalStorage('./local-storage');

    
//     localStorage.setItem('isik', req.body.sicaklik);
//     localStorage.setItem('sicaklik', req.body.sicaklik);
    
    

  
//   var result = {
     
//     //   motorDurum: localStorage.getItem('motor'),
//     //   fan: localStorage.getItem('fan'),
//     //   sicaklik: localStorage.getItem('sicaklik'),

//      motorDurum: req.body.motor,
//      sicaklik : req.body.sicaklik,  
//      fan : req.body.fan
//     };

//   // Sonucun JSON formatında gönderilmesi
//   //res.json(result);

//     res.json(result)

//   console.log("\nPost islemi basariyla gerceklesti...");
//   console.log(result);
//   console.log("........................");
// });



// POST isteği karşılanması
app.post('/endpoint', (req, res) => {

    const localStorage = new LocalStorage('./local-storage');

    localStorage.setItem('motor', req.body.motor);
    localStorage.setItem('fan', req.body.fan);
    //localStorage.setItem('sicaklik', req.body.sicaklik);
    
    

  
  var result = {
     
    //   motorDurum: localStorage.getItem('motor'),
    //   fan: localStorage.getItem('fan'),
    //   sicaklik: localStorage.getItem('sicaklik'),

     motorDurum: req.body.motor,
     //sicaklik : req.body.sicaklik,  
     fan : req.body.fan
    };

  // Sonucun JSON formatında gönderilmesi
  //res.json(result);

    res.json(result)

  console.log("\nPost islemi basariyla gerceklesti...");
  console.log(result);
  console.log("........................");
});





  app.get('/roomData', (req, res) => {


    const localStorage = new LocalStorage('./local-storage');

    const dataesp32 = {

      motorDurum: localStorage.getItem('motor'),
      fanDurum: localStorage.getItem('fan'),
      //sicaklikDurum: localStorage.getItem('sicaklik'),
    
    
      //   RFID : '1234567890',
    //   temperature : '27',
    //   gazStatus : 1
    };
    res.json(dataesp32);
  
    
    //console.log("Motor Durumu : "+dataesp32.motorDurum+"\n"+"RFID numarasi : "+ dataesp32.RFID +"\n"+"Sicaklik: "+dataesp32.temperature+"\nGaz Durumu : "+dataesp32.gazStatus);
    console.log(".........................")
  
    //console.log(frontend.motorStatus);
  //res.send("Motor Durumu : "+dataesp32.motorDurum+"\n"+"RFID numarasi : "+ dataesp32.RFID +"\n"+"Sicaklik: "+dataesp32.temperature+"\nGaz Durumu : "+dataesp32.gazStatus)
  });
 


// Sunucunun dinlemesi
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} numaralı portta çalışıyor.`);
});


















//const motor = req.body.motor || null;
  //var motor = req.body.motor ;
  
//   if (motor === null) {
//     // Hata durumunda yanıt gönderme
//     return res.status(400).json({ error: 'motor parametresi gereklidir' });
//   }