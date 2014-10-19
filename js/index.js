// hide everything but wordcloud.jpg
$(document).ready(function() {
	$('#genomics').hide('fast');
	$('#lexos').hide('fast');
	$('#teaching').hide('fast');
	$('#profile').hide('fast');
	$('#personal').hide('fast');
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
		$('#personal').show('fast');
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
		$('#wordcloud').show('fast');
	})
})