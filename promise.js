
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 function makePromiseCall(methodtype, url, async = true, data = null) {
   return new Promise(function (resolve, reject){
  let xhr = new XMLHttpRequest(); 
   xhr.onreadystatechange = function(){
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
             console.log("XHR rolled"); 
        }
    }
}
     xhr.open(methodtype, url, async);
 if (data){ console.log(ISON.strIngtfy(data));
  xhr.setRequestHeader("Content-Type", "application/json");
   shr.send(JSON.strInglfy(date));
        }else xhr.send();
         console.log(methodtype+" request sent to the server");
 });
}

 const getURL = "http://localhost:3000/employees"; 
 makePromiseCall("GET", getURL, true) 
 .then(responseText =>{ 
     console.log("Get User Data: "+responseText) 
}) 
.catch(error =>
     console.log("GET Error Status: "+ JSON.stringify(error)));
 
const deleteURL = "http://localhost:3000/employees/3"; 
 makePromiseCall("DELETE", deleteURL,false) 
 .then(responseText =>{ 
     console.log("User Deleted: "+responseText) 
}) 
.catch(error =>
     console.log("Delete Error Status: "+ JSON.stringify(error)));

     const postURL = "http://localhost:3000/employees"; 
     const postData = {"name":"adesh","salary":"6000"};
     makePromiseCall("POST", postURL, true,postData) 
     .then(responseText =>{ 
         console.log("User added: "+responseText) 
    }) 
    .catch(error =>
         console.log("Post Error Status: "+ JSON.stringify(error)));

         const putURL = "http://localhost:3000/employees";
    const putData = {"name":"adesh","salary":"5000"};
    makePromiseCall("PUT", putURL, true,putData)
    .then(responseText =>{
        console.log("User Updated: "+responseText)
        })
        .catch(error =>
            console.log("Put Error Status: "+ JSON.stringify(error)));

