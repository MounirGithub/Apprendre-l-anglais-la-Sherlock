var mysql = require('mysql');
exports.mysqlConnection = function () {
    

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'coursbd',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


    return mysqlConnection;
}