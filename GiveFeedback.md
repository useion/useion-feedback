# Use case Give Feedback

## Actors

User

## Main scenario

1. User selects to give a feedback
2. System prompts for the user's name, email, and feedback
3. User enters the data
4. System saves the data
5. System notifies the user of the successful submission

# Code

## index.html

```
<html>
<head>
<meta content="text/html; charset=utf-8">
<title>Give feedback</title>
<script type="text/javascript" src="post.js"></script>
<script type="text/javascript" src="main.js"></script>
</head>
<body onload="main()">

<form id="give-feedback"><!-- **The system prompts for the user's name, email, and feedback** -->
    <p>
		<label for="name">Name:</label>
    	<input id="name" name="name" type="text" value="" />
	</p>
	<p>
		<label for="email">Email:</label>
    	<input id="email" name="email" type="text" value="" />
	</p>
    <p>
		<label for="feedback">Feedback:</label><br/>
    	<textarea id="feedback" name="feedback" cols="40"></textarea>
	</p>
    <input type="submit" value="Send" />
	<p id="result"></p>
</form>

</body>
</html>
```

## main.js

```
var main = function() {
        var form = document.getElementById("give-feedback");
        form.onsubmit = function() {
            post("https://script.google.com/macros/s/AKfycbxS6j3-0Yq5G5uZXvTTBJGRbcjO1mPUDAN-KuKez2VI2CU2XWc/exec", 
            {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                feedback: document.getElementById("feedback").value
            }, function (result) {
                var rObj = JSON.parse(result);
                if (rObj.result == "success") {
                    document.getElementById("result").innerHTML = "Success!";
                } else {
                    document.getElementById("result").innerHTML = "Something went wrong :-(";
                }
                console.log(result);
            });
            return false;
        };
    };
```
