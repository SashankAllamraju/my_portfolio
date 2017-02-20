// bio
var bio = {
    "name": "Sashank Allamraju",
    "role": "Web Developer | Designer",
    "contacts": {
        "mobile": "+91-8220257321",
        "email": "allamraju.sashank@gmail.com",
        "github": "https://github.com/SashankAllamraju",
        "linkedin": "https://in.linkedin.com/in/sashankallamraju",
        "location": "Mumbai, India"
    },
    "welcomeMessage": "I am a self-taught SQL & Front-End Web Developer. I'm passionate about UX/UI design and web development.",
    "skills": ["HTML", "CSS", "JavaScript", "SQL", "Git", "WordPress", "SEO"],
    "biopic": "images/sashank.png"
};

// education
var education = {
	"schools": [{
			"name": "School of Planning & Architecture",
			"location": "New Delhi, India",
			"degree": "Bachelors",
			"majors": ["Architectural Design", "Building Construction"],
			"dates": "2012",
			"url": "http://www.spa.ac.in/"
	}],
	"onlineCourses": [{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "Nov 2016 - Jan 2017",
			"url": "https://www.udacity.com/course/nd001"
	}]
};

// work
var work = {
	"jobs": [{
			"employer": "Lucid Technologies & Solutions",
			"title": "Software Developer",
			"location": "Chennai, India",
			"dates": "Feb 2015 - Sep 2016",
			"description": ""
	}, {
			"employer": "IMAGES Architects-Interior Designers",
			"title": "Architect",
			"location": "New Delhi, India",
			"dates": "Jun 2012 - Nov 2014",
			"description": ""
	}]
};

// projects
var projects = {
	"projects": [
		{
			"title": "Neighborhood Map",
			"duration": "",
			"description": "Neighborhood Map project for Udacity Front-end Web Development Nanodegree",
			"image": "",
			"github": "",
			"demo": "",
			"skills": [""]
		},
		{
			"title": "",
			"duration": "",
			"description": "",
			"image": "",
			"github": "",
			"demo": "",
			"skills": [""]
		}]
};

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 7,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "HTML",
    labelcolor: "red"
  },
  {
    value: 6,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 5,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Git",
    labelcolor: "yellow"

  },
	{
    value: 7,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "CSS",
    labelcolor: "orange"
  },
  {
    value: 4,
		color: "#A8B3C5",
    highlight: "#A8B4D1",
    label: "WordPress",
    labelcolor: "grey"
  },
  {
    value: 8,
    color: "#23582b",
    highlight: "#34743E",
    label: "SQL",
    labelcolor: "darker-green"
  },
  {
    value: 6,
    color: "#4D5360",
    highlight: "#616774",
    label: "SEO",
    labelcolor: "darker-grey"
  }
];

// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
};

// main structure

(function($) {

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Footer.
			skel.on('+medium', function() {
				$footer.insertAfter($main);
			});

			skel.on('-medium !medium', function() {
				$footer.appendTo($header);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

					$window.on('load', function() {
						$window.triggerHandler('scroll');
					});

				}

		// Main Sections: Two.

			// Lightbox gallery.
				$window.on('load', function() {

					$('#two').poptrox({
						caption: function($a) { return $a.siblings('p').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});



	});

})(jQuery);



// Main Sections: One.
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:true
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};

// Display Google Map
$("#mapDiv").append(googleMap);
