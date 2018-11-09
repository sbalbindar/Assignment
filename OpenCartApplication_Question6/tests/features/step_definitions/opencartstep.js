
const {client} = require('nightwatch-cucumber');
const defineSupportCode = require('cucumber').defineSupportCode;


defineSupportCode(({Given, Then, When}) => {

	const loginpage = client.page.loginpage();
	var data = client.globals;
  Given(/^launch the application$/, function ()  {


	  client.init();
	  client.refresh()
      loginpage.waitForElementVisible('@loginbutton',10000)
      return client
  });

 Then(/^the user should see the title/, function() {


	 //loginpage.waitForElementVisible('@profileImage',10000)

       loginpage.waitForElementPresent('@title', 10000, function(res) {

  })

        return client

  });
  When(/^the user logs in with invalid credentials/, function() {


  	  loginpage.setValue('@username', data.invalidusername)
       loginpage.setValue('@password', data.invalidpassword)
        loginpage.click('@submit')
        // loginpage.waitForElementVisible('@menu',20000)


         return client

   });
   Then(/^the user should see proper error message for invalid credentials/, function() {


   	 loginpage.waitForElementPresent('@invalidloginerror',10000, function(result) {
   		// var x= loginpage.getText('@invalidloginerror');
   		// var x=result.value;
   		// way2goId=way2goId1.substring(way2goId1.length- 12);

   		// console.log(x+"bal");

   		 client.pause(2000)
   		 loginpage.assert.containsText('@invalidloginerror', "No match for E-Mail and/or Password.")

     })

   		        return client

   });
   });