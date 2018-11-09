var seleniumServer = require('selenium-server')
var phantomjs = require('phantomjs-prebuilt')
var nightwatchCucumber = require('nightwatch-cucumber')
require('nightwatch/bin/runner.js');

/*var nightwatchCucumberConf = {
   
  featureFiles: "examples/tests/features",
    stepDefinitions: "examples/tests/features/step_definitions",
    closeSession: 'afterFeature'
}*/
/*   require('nightwatch-cucumber')({
      cucumberArgs: ['--require', 'examples/tests/features/step_definitions', '--format', 'json:reports/cucumber.json', 'examples/tests/features']

})*/

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--format', 'json:reports/cucumber.json',
    'tests/features',
    '--require', 'tests/features/support/hooks.js',
    '--require', 'tests/features/step_definitions',
    'tests/features'

  ]
})

module.exports = {

	"src_folders" : "tests",
	"output_folder" : "reports",
	"page_objects_path":'page-objects',	
	"globals_path" : 'tests/features/globals/globals.js',
	"live_output" : true,
	

	"selenium" : {
		"start_process" : true,
		"server_path" : "lib/selenium-server-standalone-3.4.0.jar",
		"log_path" : "logs",
		"port" : 8080,
		"cli_args" : {
			"webdriver.chrome.driver" : "bin/chromedriver.exe",
			"webdriver.gecko.driver" : "lib/geckodriver.exe",
			
			
			
			
		}
	},

	"test_settings" : {
		"default" : {
			"launch_url" : "https://www.opencart.com",
			"selenium_port" : 8080,
			"selenium_host" : "localhost",
			"silent" : true,
			"screenshots" : {
				"enabled" : true,
				"path" : "screenshots",
				"on_failure" : true
			},
			"firefox1" : {
			"desiredCapabilities" : {
				"browserName" : "firefox",
				"marionette" : true,
				"javascriptEnabled": true,
        		"acceptSslCerts": true
			},
			},
			"acceptSslCerts" : false,
			"use_xpath" : true
		},

		"chrome" : {
			"desiredCapabilities" : {
				"browserName" : "chrome",
				"javascriptEnabled" : true,
				"acceptSslCerts" : true,
				"chromeOptions" : {
					"args" : ["--ignore-ssl-errors=true", "start-maximized", "test-type"]
				}
				
			}

		},
		
		

		"firefox" : {
			"desiredCapabilities" : {
				"browserName" : "firefox",
				"marionette" : true,
				"javascriptEnabled": true,
				"use_xpath" : true,
        		"acceptSslCerts": true			
        		}
		}
	} 

}