    /* Magic Mirror Config Sample
    *
    * By Michael Teeuw http://michaelteeuw.nl
    * MIT Licensed.
    */

    var config = {
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

    language: 'en',
    timeFormat: 24,
    units: 'metric',

    modules: [
        {
            module: 'alert',
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: 'clock',
            position: 'top_left'
        },
        // {
        // 	module: 'calendar',
        // 	header: 'US Holidays',
        // 	position: 'top_left',
        // 	config: {
        // 		calendars: [
        // 			{
        // 				symbol: 'calendar-check-o ',
        // 				url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
        // 			}
        // 		]
        // 	}
        // },
        /*{
            module: 'compliments',
            position: 'lower_third'
        },*/
        // {
        // 	module: 'currentweather',
        // 	position: 'top_right',
        // 	config: {
        // 		location: 'New York',
        // 		locationID: '',  //ID from http://www.openweathermap.org
        // 		appid: 'YOUR_OPENWEATHER_API_KEY'
        // 	}
        // },
         {
         	module: 'weatherforecast',
         	position: 'top_right',
         	header: 'Weather Forecast',
         	config: {
         		location: 'New York',
         		locationID: '5128581',  //ID from http://www.openweathermap.org
         		appid: 'YOUR_OPENWEATHER_API_KEY'
         	}
         },
        {
            module: 'newsfeed',
            position: 'bottom_bar',
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
        {
            module: 'MMM-Smile',
            position: "middle_center",
            config: {
                        // recognition interval in ms, default to 8 hours
                        interval: 8 * 60 * 60 * 1000,
                        // total test running time in seconds
                        testRunTime: 120,
                        // the smiling period in seconds in order to pass the test
                        smileLength: 5,
                        // use pi camera by default; set it to false for laptop camera
                        usePiCam: false
                    }
        },
        {
            module: 'camera',
            position: 'top_center',
            config: {
                        selfieInterval: 3,  // Time interval (s) before the photo will be taken.
                        emailConfig: {
                            service: 'Yahoo', // Email provider to use to send email with a photo.
                            auth: {
                                user: '', // Your email account
                                pass: ''        // Your password for email account
                            }
                        }
                    }
        },
        {
	       module: 'voicecontrol',
	       position: 'bottom_left',
	       config: {
		      models: [
			     {
				    keyword: "Show Camera",
				    description: "Say 'Show Camera' to display camera",
				    file: "showCamera.pmdl",
				    message: "SHOW_CAMERA"
			     },
			     {
				    keyword: "Hide Camera",
				    description: "Say 'Hide Camera' to hide camera",
				    file: "hideCamera.pmdl",
				    message: "HIDE_CAMERA"
			     },
			     {
				    keyword: "Selfie",
				    description: "Say 'Selfie' when camera is visible",
				    file: "selfie.pmdl",
				    message: "SELFIE"
			     },
                 {
                    keyword: "Show Weather",
                    description: "Say 'Show Weather' to display weather",
                    file: 'showWeather.pmdl',
                    message: "SHOW_WEATHER"
                 },
                 {
                    keyword: "Hide Weather",
                    description: "Say 'Hide Weather' to hide weather",
                    file: 'hideWeather.pmdl',
                    message: "HIDE_WEATHER"
                 },
		      ]
	       }
        },



    ]

    };

    /*************** DO NOT EDIT THE LINE BELOW ***************/
    if (typeof module !== 'undefined') {module.exports = config;}
