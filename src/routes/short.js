const express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.post('/', (req, res)=> {
 console.log(req.body);
 res.send("POST RESPONSE"); 
});

module.exports = router;
