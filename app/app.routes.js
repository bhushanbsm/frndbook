app.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
		template: "<div>hello</div>",
	})
	.when("/page2.html", {
		template: "<div>page2</div>"
	});
});