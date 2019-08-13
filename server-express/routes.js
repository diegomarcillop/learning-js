const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
     res.render('index.ejs');
});

router.get('/login',(req, res) =>{
     res.render('login');
});

router.get('*', (req, res)=>{
     res.end('<h1>archivo no encontrado</h1>');
});

module.exports = router;