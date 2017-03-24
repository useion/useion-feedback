var post = function(path, data, done) {
        var file = new XMLHttpRequest();
        file.open("POST", path, true);
        file.onreadystatechange = function() {
            if (file.readyState === 4 && (file.status === 200 || file.status == 0)) {
                done(file.responseText);
            }
        };
        var str = "";
        for (var key in data) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(data[key]);
        }
        file.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        file.send(str);
    },
    get = function(path, data, done) {
        var file = new XMLHttpRequest();
        file.open("GET", path, true);
        file.onreadystatechange = function() {
            if (file.readyState === 4 && (file.status === 200 || file.status == 0)) {
                done(file.responseText);
            }
        };
        var str = "";
        for (var key in data) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(data[key]);
        }
        file.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        file.send(str);
    };

