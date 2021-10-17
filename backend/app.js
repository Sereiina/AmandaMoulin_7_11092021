const dotenv = require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const userRoutes = require('./routes/user');
const postTextRoutes = require('./routes/postText');
const postCommentRoutes = require('./routes/commentPost');

const app = express();
 

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const multer = require('./middlewares/multer-config');

// app.post('/upload', multer.array('content', 3), function(req, res, next) {
//     res.send('Successfully uploaded ' + req.files.length + ' files!')
// })


//Security & data
app.use(bodyParser.json());
app.use(helmet());
app.use(cors()); 

//Routes
app.use('/api/auth', userRoutes);
app.use('api/profil', userRoutes);

app.use('/api/auth', postTextRoutes);
app.use('/api/posts', postTextRoutes);

app.use('/api/auth', postCommentRoutes);
app.use('/api/comments', postCommentRoutes);


module.exports = app; 