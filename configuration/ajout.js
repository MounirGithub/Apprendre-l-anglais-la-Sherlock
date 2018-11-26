var db = require('./connexionDb');
var mysqlConnection = db.mysqlConnection();

const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const port = 3000





app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use("/gestion", express.static(`${__dirname}/www/Gestion`))
app.use("/ajout", express.static(`${__dirname}/www/ajout`))

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

app.post('/ajout', (req, res) => {



    let p = req.body;

    var planche={nomplanche:p.nomplanche};
    mysqlConnection.query('INSERT INTO planche SET ?',planche,(err, rows, fields) => {
        if (!err)
            {
        }else
            console.log(err);
    })
    /*let val = mysqlConnection.query('SELECT idplanche FROM planche where nomplanche =?',p.nomplanche, (err, rows, fields) => {
        if (!err){
            
            }
        else
            console.log(err);
    })*/
    var descriptionplanche={textedesc:p.textedesc,idp:p.idplanche};
    mysqlConnection.query('INSERT INTO descriptionplanche SET ?',descriptionplanche,(err, rows, fields) => {
        if (!err)
            {
        }else
            console.log(err);
    })
    var question={texteq:p.texteq,idpl:p.idplanche};
    mysqlConnection.query('INSERT INTO question SET ?',question,(err, rows, fields) => {
        if (!err)
            {
        }else
            console.log(err);
    })
    /*let vall = mysqlConnection.query('SELECT idquestion FROM question where texteq =?',p.texteq, (err, rows, fields) => {
        if (!err){
            
            }
        else
            console.log(err);
    })*/
    var reponse={textrep:p.textrep,bonnereponse:p.bonnereponse,idqu:p.idquestion};
    mysqlConnection.query('INSERT INTO reponse SET ?',reponse,(err, rows, fields) => {
        if (!err)
            {res.send('Inserted ');
        }else
            console.log(err);
    })
    
    
});

