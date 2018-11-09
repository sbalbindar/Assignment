module.exports = {


  elements: {
  title:{selector: 'body > header > nav > div > div.navbar-header > a > img'},
  loginbutton:{ selector: '#navbar-collapse-header > div > a.btn.btn-link.navbar-btn' },
	  email: { selector: '[name="email"]' },
    password: { selector: '[name="password"]' },
	 submit: { selector: 'div:nth-child(1) > button.btn.btn-primary.btn-lg.hidden-xs'},
	 invalidloginerror:{selector:'#account-login > div.container > div.alert.alert-danger'},
	  }

};






