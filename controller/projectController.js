const express = require('express');
const router = express.Router();
// const 

router.get('/', function (req, res, next) {

    const sql = 'SELECT * FROM topic'
    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results)
        res.send(results)
    });

})


router.post('/', function (req, res, next) {

    connection.query("INSERT INTO  topic SET ?", req.body, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
    });
    res.send('데이터 호출')
})
