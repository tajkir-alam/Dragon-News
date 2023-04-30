const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const news = require('./data/news.json');
const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('Visit /news & /categories to grab Datas!!!');
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const singleNews = news.find(n => n._id === id);
    res.send(singleNews);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        return res.send(news);
    }
    const category = news.filter(n => parseInt(n.category_id) === id);
    res.send(category);
})

app.listen(port, () => {
    console.log(`Dragon News API is running  on  ${port}`);
})