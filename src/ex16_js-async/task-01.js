function fetchAnalog(url, options) {
    let xhr = new XMLHttpRequest();
    let method = "GET";
    if (arguments.length === 2){
      method="POST"
    }
    let promise = new Promise(function(resolve, reject) {
        xhr.open(method, url);  
        if (options) {
            for (let header in options.headers) {
                if (header in options.headers) 
                    xhr.setRequestHeader(header, options.headers[header]);    
            } 
            xhr.send(options.body);  
        }    
        else 
        xhr.send();          
        xhr.onload = function () {
            resolve("succesfull");
        };
        xhr.onerror = function() {  
            reject("Ошибка соединения");  
        };  
    });
} 
module.exports=fetchAnalog;