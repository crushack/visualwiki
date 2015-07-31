var express = require('express')
  , app     = express();

app.use(express.static('public'));

app.get('/', function( req, res ) {

});

app.listen( 3000, function() {
  console.log('App running on port 3000');
});

