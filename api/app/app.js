import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import mongoose from 'mongoose'
import routes from './REST/routes';
import config from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log('Connect with database established');
    }
});

process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.error('Mongoose default connection disconnected through app termination');
        process.exit(0);
    })
});

// app.get('/api/posts', (req, res) => {
//     res.send(posts);
// });
//
// app.get('/api/posts/:id', (req, res) => {
//     res.send(posts[parseInt(req.params.id)]);
//     // res.status(404).send("Post not found");
// });
//
// app.post('/api/posts', (req, res) => {
//     const post = {
//         id: posts.length + 1,
//         albumId: req.body.albumId,
//         title: req.body.title,
//         url: req.body.url,
//         thumbnailUrl: req.body.thumbnailUrl,
//     };
//     posts.push(post);
//     res.send(post);
// });
//
// app.put('/api/posts/:id', (req, res) => {
//     const post = posts.find((p) => p.id === parseInt(req.params.id));
//     if (!post) {
//         res.status(404).send("Post NotFound");
//     }
//     post.title = req.body.title;
//     post.url = req.body.url;
//     post.thubnailUrl = req.body.thubnailUrl;
//     res.send(post);
// });

routes(app);

app.listen(config.port, () => {
    console.log(`Server is running at ${config.port}`);
});