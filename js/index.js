// hide everything but wordcloud.jpg
$(document).ready(function() {
	$('#genomics').hide('fast');
	$('#lexos').hide('fast');
	$('#teaching').hide('fast');
	$('#profile').hide('fast');
	$('#personal').hide('fast');
	$('#travels').hide('fast');
})

// genomics hover
$(function() {
	$('#genomic').mouseover(function() {
		console.log("hovering");
		$('#wordcloud').hide('fast');
		$('#lexos').hide('fast');
		$('#teaching').hide('fast');
		$('#profile').hide('fast');
		$('#personal').hide('fast');
		$('#travels').hide('fast');
		$('#genomics').show('fast');
	})
})

// anglo saxon hover
$(function() {
	$('#lexomics').mouseover(function() {
		console.log("hovering");
		$('#wordcloud').hide('fast');
		$('#genomics').hide('fast');
		$('#teaching').hide('fast');
		$('#profile').hide('fast');
		$('#personal').hide('fast');
		$('#travels').hide('fast');
		$('#lexos').show('fast');
	})
})

// teaching hover
$(function() {
	$('#teach').mouseover(function() {
		console.log("hovering");
		$('#wordcloud').hide('fast');
		$('#genomics').hide('fast');
		$('#lexos').hide('fast');
		$('#profile').hide('fast');
		$('#personal').hide('fast');
		$('#travels').hide('fast');
		$('#teaching').show('fast');
	})
})

// profile hover
$(function() {
	$('#prof').mouseover(function() {
		console.log("hovering");
		$('#wordcloud').hide('fast');
		$('#genomics').hide('fast');
		$('#teaching').hide('fast');
		$('#lexos').hide('fast');
		$('#personal').hide('fast');
		$('#travels').hide('fast');
		$('#profile').show('fast');
	})
})

// personal hover
$(function() {
	$('#person').mouseover(function() {
		console.log("hovering");
		$('#wordcloud').hide('fast');
		$('#genomics').hide('fast');
		$('#teaching').hide('fast');
		$('#profile').hide('fast');
		$('#lexos').hide('fast');
		$('#travels').hide('fast');
		$('#personal').show('fast');
	})
})

// travels hover
$(function() {
	$('#map').mouseover(function() {
		console.log("hovering");
		$('#wordcloud').hide('fast');
		$('#genomics').hide('fast');
		$('#teaching').hide('fast');
		$('#profile').hide('fast');
		$('#lexos').hide('fast');
		$('#personal').hide('fast');
		$('#travels').show('fast');
	})
})

// mouse leaves menu
$(function() {
	$('#menu').mouseleave(function() {
		console.log("body");
		$('#genomics').hide('fast');
		$('#lexos').hide('fast');
		$('#teaching').hide('fast');
		$('#profile').hide('fast');
		$('#personal').hide('fast');
		$('#travels').hide('fast');
		$('#wordcloud').show('fast');
	})
})



// real time ETA progress bar
$(function() {

	var today = new Date(),					// today's date
		dayHeLeft = new Date(2014, 4, 1),	// date he left
		totalDays = 457,					// total number of days he's gone
		daysBeenGone = today - dayHeLeft,	// # days gone so far
		percent;							// percent of time completed

	// convert number of days he's been gone to days from milliseconds
	// check in console to make sure right
    daysBeenGone = ((((daysBeenGone/1000)/60)/60)/24);
    console.log(daysBeenGone);


    // if he's already back fill up entire bar and say he's been gone
    if ((totalDays - daysBeenGone) <= 0) {
		document.getElementById('progressbar').style.width=100 + "%";
        document.getElementById('progressbar').innerHTML="Mark's returned";
    }
    
    // if he isn't back yet fill up what percent is completed and say how much
    else {

        if (daysBeenGone != 0) {
           	percent = Math.floor((daysBeenGone/totalDays)*100);
        }

        console.log(percent);
        document.getElementById('progressbar').style.width=percent + "%";
        document.getElementById('progressbar').innerHTML=percent + "% of sabbatical completed";
    }
})