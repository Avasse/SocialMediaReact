const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'socialdb'
});

let state = {
	db: null
};

exports.connect = function() {
	if (state.db) {
		console.log('Already connected');
	} else {
		connection.connect(err => {
			if (err) throw err;
			state.db = connection;
			console.log('You are now connected as root');
		});
	}
};

exports.get = function() {
	return state.db;
};