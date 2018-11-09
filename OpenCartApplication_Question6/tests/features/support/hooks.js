var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

   defineSupportCode(function({After, Before}) {


	   Before(function () {
		
           return client.init();
           client.deleteCookies();
        
       });
	   
       After(function () {
          client.end();
          client.closeWindow();

});
    	   	


    	   
       });   
  
       




