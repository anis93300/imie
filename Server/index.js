const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors({}))
app.use(express.json());


app.use(require('./FormationController'));

app.listen(8080,()=>{
    console.log('8080');
})