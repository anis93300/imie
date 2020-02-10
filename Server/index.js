const express = require('express')
const app = express();

app.use(express.json());


app.use(require('./FormationController'))

app.listen(8080,()=>{
    console.log('8080');
})