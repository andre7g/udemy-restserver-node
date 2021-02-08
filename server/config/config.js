//------------
//Puerto
//------------

process.env.PORT = process.env.PORT || 3000;

//-----------
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//-----------
//Base de datos
//-----------
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://andreg7:Wnw61u1Kvvnkz1Al@cluster0.8vpzz.mongodb.net/cafe';
}
process.env.URLDB = urlDB;