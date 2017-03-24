var assert = require('assert'),
	fs = require('fs'),
	request = require('request'),
	post = function(url, data, done) {
		request.post({
				followAllRedirects: true,
				url: url, 
				form: data
			},
			function(error, response, body) {
				done(body);
			}
		);
	},
	get = function(url, data, done) {
		request.get({
				followAllRedirects: true,
				url: url, 
				form: data
			},
			function(error, response, body) {
				done(body);
			}
		);
	};


eval(fs.readFileSync("model/Spreadsheet.js", "utf-8"));

function testSpreadsheet() {

	Spreadsheet.add({
		"name": "Michal",
		"email": "@",
		"feedback": "It works!"
	}, function(r) {
		assert(r.result === "success", "Adding a feedback should be successful");

		Spreadsheet.get(function(r) {
			assert(r.rows[0][3] === "It works!", "The last feedback should be 'It works!'");
		})
	})

}
testSpreadsheet();
