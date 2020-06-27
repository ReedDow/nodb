const express = require('express');
const bodyParser = require('body-parser')
const photoCtrl = require('./controllers/photoCtrl');
const favCtrl = require('./controllers/favCtrl');
const app = express();

app.use(express.json());

app.get('/api/photos', photoCtrl.getPhoto);


app.get('/api/favorites', favCtrl.getFavoritePhoto);

app.post('/api/favorites', favCtrl.chooseFavorite);

app.put('/api/favorites:id', favCtrl.editTitle);

app.delete('/api/favorites:id', favCtrl.
deleteFavoritePhoto);


app.listen(3333, () => console.log('Server is running on 3333'));