const http = require('http');

http.get('http://api.ipify.org?format=json', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;    
  });
  
  resp.on('end', () => {    
    console.log("Your IP address is "+JSON.parse(data).ip)
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});