var Spreadsheet = {
	add: function (data, done) {
		post("https://script.google.com/macros/s/AKfycbxS6j3-0Yq5G5uZXvTTBJGRbcjO1mPUDAN-KuKez2VI2CU2XWc/exec", 
			data,
			function (result) {
				done(JSON.parse(result));
			});
	},
	get: function (done) {
		get("https://script.google.com/macros/s/AKfycbxS6j3-0Yq5G5uZXvTTBJGRbcjO1mPUDAN-KuKez2VI2CU2XWc/exec", 
			{},
			function (result) {
				done(JSON.parse(result));
			});
	},
}



