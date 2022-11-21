let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    return res.send({
        message: '64050283, 64050433, 64050602'
    })
})


//connect sql
let dbCon = mysql.createConnection(
    {
        host :'localhost',
        user: 'root',
        database:'csv_db 6'
})
dbCon.connect();

//retrive all
app.get('/oil',(req, res) => {
       dbCon.query('SELECT * FROM f0f5b4f0dd4c3e7b', (error, results, fields) => {
       if (error) throw error;
       let message = ""
       if(results === undefined || results.length == 0){
        message = "oil table is empty"
       }else{
        message = "successfully";
       }
       return res.send({/*error: false, */data: results/*, message: message*/});
    })
    })
app.listen(process.env.PORT || 3021, () => {
    console.log('node is running App http://localhost:3021');
})

module.exports = app;