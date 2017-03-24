# Test Unit Spreadsheet

## SpreadsheetTest.js

```
function testSpreadsheet() {

	Spreadsheet.add({
		"name": "Michal",
		"email": "michal.bystricky@stuba.sk",
		"feedback": "It works!"
	}, function(r) {
		assert(r.result === "success", "Adding a feedback should be successful");

		Spreadsheet.get(function(r) {
			assert(r.rows[0][3] === "It works!", "The last feedback should be 'It works!'");
		})
	})

}
```

# Code

## model/Spreadsheet.js

```
var Spreadsheet = {
	get: function (done) {
		get("https://script.google.com/macros/s/AKfycbxS6j3-0Yq5G5uZXvTTBJGRbcjO1mPUDAN-KuKez2VI2CU2XWc/exec", 
			{},
			function (result) {
				done(JSON.parse(result));
			});
	},

}

```

