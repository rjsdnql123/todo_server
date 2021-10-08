const mysql = require('mysql');
const router = express.Router();


let client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'z1817617',
    database: 'opentutorials'
});

router.post('/create', (req, res, next) => {
    let body = req.body;

    client.query('INSELRT INTO topic (title, description, author_id) VALUE (?, ?, ?)', [
        body.title, body.description, body.author_id
    ])
})

module.exports = router;