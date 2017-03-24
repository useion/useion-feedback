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