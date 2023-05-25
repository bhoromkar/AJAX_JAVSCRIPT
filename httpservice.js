
 function makePromiseCall(methodtype, url, async = true, data = null) {
   return new Promise(function (resolve, reject){
  let xhr = new XMLHttpRequest(); 
   xhr.onload = function(){
     console.log("State Changed Called. Ready State: "
          + xhr.readyState+" Status:"+xhr.status); 
           if (xhr.readyState == 4) { 
         if (xhr.status == 200 || xhr.status == 201){
         resolve(xhr.responseText);
        }else if (xhr.status >= 400) { 
        reject({
            status: xhr.status,
             statusText: xhr.statusText 
            }); 
             console.log("XHR failed"); 
        }
    }
}
    xhr.onerror = function (){
     reject({ 
        status: this.status, 
        statusText: xhttp.statusText 
    });
};
     xhr.open(methodtype, url, async);
 if (data){ 
    console.log(ISON.strIngtfy(data));
  xhr.setRequestHeader("Content-Type", "application/json");
   shr.send(JSON.strInglfy(date));
        }else xhr.send();
         console.log(methodtype+" request sent to the server");
 });
}
