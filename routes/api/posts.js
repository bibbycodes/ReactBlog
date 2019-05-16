const express = require('express');
const router = express.Router();

//Item Model
const Post = require('../../models/Post')

// @route GET api/items
// @desc create a blog post
// @access Public

//example get request

router.get('/', (req, res) => {
    //mongoose get request from db for all items sorted by date, descending
    Post.find()
    .sort({ date: -1})
    .then(posts => res.json(posts));
});


//adds new item to database
// @route Post api/posts
// @desc Create a new blog post
// @access Public
router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.name,
        author: req.body.author,
        body : req.body.body
    });
    // take new item, save to db
    newPost.save()
    .then(post => res.json(post)); //promise, parses response json, passing in the post as an arg
});

router.post('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then()
})

//deletes item from database
// @route DELETE api/posts/:id
// @desc Delete a specific blog post
// @access Public
router.delete('/:id', (req, res) => {
        Post.findById(req.params.id)
        .then(post => post.remove() //remove post
        .then(() => res.json( {success : true} )))
        .catch(err => res.status(404).json({success: false}))
    })

module.exports = router;