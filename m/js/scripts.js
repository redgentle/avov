
/* s:반응형웹 */
(function($) {
var jRes = jRespond([
	{
		label: 'handheld',
		enter: 0,
		exit: 748
	},{
		label: 'tablet2',
		enter: 748,
		exit: 1004
	},{
		label: 'tablet',
		enter: 1004,
		exit: 1300
	},{
		label: 'laptop',
		enter: 1300,
		exit: 1630
	},{
		label: 'desktop',
		enter: 1640,
		exit: 10000
	}
]);

// usage
var outputStr = document.getElementById('output');

jRes.addFunc({
	breakpoint: 'desktop',
	enter: function() {
		
		$("body").addClass("desktop");
		$("body").removeClass("laptop");
		$("body").removeClass("tablet");
		$("body").removeClass("tablet2");
		$("body").removeClass("handheld");
		
	},
	exit: function() {
		console.log('<<< destroy this when exiting the DESKTOP breakpoint >>>');
	}
});

jRes.addFunc({
	breakpoint: ['laptop','tablet'],
	enter: function() {
		console.log('>>> run this for the LAPTOP/TABLET breakpoint <<<');
	},
	exit: function() {
		console.log('<<< destroy this when exiting the LAPTOP/TABLET breakpoint >>>');
	}
});

jRes.addFunc({
	breakpoint: 'laptop',
	enter: function() {
		
		$("body").removeClass("desktop");
		$("body").addClass("laptop");
		$("body").removeClass("tablet");
		$("body").removeClass("tablet2");
		$("body").removeClass("handheld");
		
	}
});

jRes.addFunc({
	breakpoint: 'tablet',
	enter: function() {

		$("body").removeClass("desktop");
		$("body").removeClass("laptop");
		$("body").addClass("tablet");
		$("body").removeClass("tablet2");
		$("body").removeClass("handheld");
	}
});

jRes.addFunc({
	breakpoint: 'tablet2',
	enter: function() {

		$("body").removeClass("desktop");
		$("body").removeClass("laptop");
		$("body").removeClass("tablet");
		$("body").addClass("tablet2");
		$("body").removeClass("handheld");
	}
});

jRes.addFunc({
	breakpoint: 'handheld',
	enter: function() {

		$("body").removeClass("desktop");
		$("body").removeClass("laptop");
		$("body").removeClass("tablet");
		$("body").removeClass("tablet2");
		$("body").addClass("handheld");

	},
	exit: function() {
		console.log('<<< destroy this when exiting the HANDHELD breakpoint >>>');
	}
});

jRes.addFunc({
	breakpoint: '*',
	enter: function() {
		console.log('>>> run this when entering EVERY breakpoint <<<');
	},
	exit: function() {
		console.log('<<< run this when exiting EVERY breakpoint >>>');
	}
});
/* e:반응형웹 */




})(jQuery);

