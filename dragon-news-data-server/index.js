const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const news = require('./data/news.json');
const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('Visit /news & /categories to grab Datas!!!');
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port , () => {
    console.log(`Dragon News API is running  on  ${port}`);
})