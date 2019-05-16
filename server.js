const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const posts = require('./routes/api/posts.js');

const app = express();
//bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys.js').mongoURI;

//conect to mongoose

mongoose
    .connect(db, {useNewUrlParser : true})
    .then(() => console.log("mongo db connected"))
    .catch(err => console.log(err));

//Use Routes
app.use(cors())
app.use('/api/posts', posts)
app.options('/api/posts', cors(),
function (req, res, next){
    res.json({msg: 'cors enabled'})
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(` server started on port ${port}`));