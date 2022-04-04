const mongoose = require('mongoose');
const URI = 'mongodb+srv://leandro2:leandrogutierrez@cluster0.nari8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;