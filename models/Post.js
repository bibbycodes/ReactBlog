const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title : {type:String ,trim: true ,default:''},
    author : {type:String ,trim: true ,default:''},
    body: {type:String ,trim: true ,default:''},
    timestamp : {type:Date ,default: Date.now}
})

module.exports = Post = mongoose.model('Post', PostSchema);