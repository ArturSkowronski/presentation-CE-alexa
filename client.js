var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: '1Fk32urciT4DPOewLffWFs3ZM',
	consumer_secret: 'RkqEHQFzloja6raaiiHd1NHJqCuH1hGRMF0pyxNubiQtrVTqKi',
	access_token_key: '33623449-sMh39yNFe86ATCVC5gotTeZ7C6fg2fdUPNFznhHU3',
	access_token_secret: '0ZLqcbe2CYNZYylkNcF4xN0EFmQzz8zDh4R4lkPmEIBQG'
});

client.get('search/tweets', {q: 'meetjs'}, function(error, tweets, response) {
	console.log(tweets);
});