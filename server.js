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

// hata cıkarsa burayı yoruma al
app.use(express.static('public'));  // BU CSS LERİ DAHİL ETMEK İCİN COK ONEMLI !!!!!!!!!!!!!!!!!!


app.get('/', function(req, res,next) {  // "locachost:3000/"
  res.sendFile(__dirname + '/index.html');
  console.info(__dirname);
});

//------------------------- POST ISLEMLERI -----------------

app.post('/fan', (req, res) => {

  const localStorage = new LocalStorage('./local-storage');

  localStorage.setItem('fan', req.body.fan);
  
var result = {
   
   fan : req.body.fan
  };


  res.json(result)

console.log("\n Fana Post islemi basariyla gerceklesti...");
console.log(result);
console.log("........................");
});


//ISITICI APİ


app.post('/isitici', (req, res) => {

  const localStorage = new LocalStorage('./local-storage');

  localStorage.setItem('isitici', req.body.isitici);
  
var result = {
   
   isitici : req.body.isitici
  };


  res.json(result)

console.log("\n Fana Post islemi basariyla gerceklesti...");
console.log(result);
console.log("........................");
});

//İSİK APİ

app.post('/isik', (req, res) => {

  const localStorage = new LocalStorage('./local-storage');

  localStorage.setItem('isik', req.body.isik);
  
var result = {
   
   isik : req.body.isik
  };


  res.json(result)

console.log("\n Fana Post islemi basariyla gerceklesti...");
console.log(result);
console.log("........................");
});

//GAz APİ

app.post('/gaz', (req, res) => {

  const localStorage = new LocalStorage('./local-storage');
  var gazDurum =localStorage.getItem('gazDurum');
  if(gazDurum ==1){
    localStorage.setItem('gazDurum', 0);
  }
  else{
    localStorage.setItem('gazDurum', 1);
  }
  
var result = {
   
   gazDurum : gazDurum
  };


  res.json(result)

console.log("\n Fana Post islemi basariyla gerceklesti...");
console.log(result);
console.log("........................");
});

//GAz APİ

app.post('/kapi', (req, res) => {

  const localStorage = new LocalStorage('./local-storage');
    var kapiDurum =localStorage.getItem('kapiDurum');
    if(kapiDurum ==1){
      localStorage.setItem('kapiDurum', 0);
    }
    else{
      localStorage.setItem('kapiDurum', 1);
    }
 
    var result = {
   
      kapiDurum : kapiDurum
     };
   

  res.json(localStorage.getItem('kapiDurum'));
  
 

console.log("\n Fana Post islemi basariyla gerceklesti...");
console.log(result);
console.log("........................");
});
//-------------------------------------------------------------------------------------------
// POST isteği karşılanması
app.post('/endpoint', (req, res) => {

    const localStorage = new LocalStorage('./local-storage');

    localStorage.setItem('motor', req.body.motor);// servo da yazabilirsin
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



// POST isteği karşılanması
app.post('/espdenGelenVeriler', (req, res) => {

  const localStorage = new LocalStorage('./local-storage');

  localStorage.setItem('sicaklik', req.body.sicaklik);// servo da yazabilirsin ************ daha duzenlemedim
  localStorage.setItem('isitici', req.body.isitici);
  localStorage.setItem('isik', req.body.isik);
  localStorage.setItem('gazDurum', req.body.gazDurum);
  localStorage.setItem('rfid', req.body.rfid);
  localStorage.setItem('fan', req.body.fan);
  localStorage.setItem('tehlikeliGaz', req.body.tehlikeliGaz);



  
console.log("........................");
console.log("esp32den veriler geldi...");

console.log("sicaklik :"+req.body.sicaklik)
console.log("fan:"+req.body.fan)
console.log("isitici :"+req.body.isitici)
console.log("isik :"+req.body.isik)
console.log("gaz Durum :"+req.body.gazDurum)
console.log("RFID No:"+req.body.rfid)
console.log("tehlikeliGaz"+req.body.tehlikeliGaz)


res.json("OK");
});


app.get('/verileriEkrandaGoster', (req, res) => {


  const localStorage = new LocalStorage('./local-storage');

  const dataesp32 = {

    sicaklikDurum: localStorage.getItem('sicaklik'),
    isiticiDurum: localStorage.getItem('isitici'),
    isikDurum: localStorage.getItem('isik'),
    gazDurum: localStorage.getItem('gazDurum'),
    rfidNo: localStorage.getItem('rfid'),
    fan:  localStorage.getItem('fan'),
    kapi :localStorage.getItem('kapiDurum'),
    tehlikeliGaz :localStorage.getItem('tehlikeliGaz')
  
  };
  
  res.json(dataesp32);

  
});






  app.get('/roomData', (req, res) => {


    const localStorage = new LocalStorage('./local-storage');

    const dataesp32 = {

      motorDurum: localStorage.getItem('motor'),
      fanDurum: localStorage.getItem('fan'),
      //sicaklikDurum: localStorage.getItem('sicaklik'),
    
    
      
    };
    res.json(dataesp32);
  
    
    
    console.log(".........................")
  
    
 
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