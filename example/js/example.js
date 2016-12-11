$(function () {
	
	var body = $("#body");

	//table creation
	var table = new Html.Table();
	table.class("table table-striped");

	table.setHeader({
		"id1" : "custom1",
		"id2" : "custom2",
		"id3" : "custom3"
	});

	table.build([
		{
			"identifier"  : {
				"content" : new Html.Div().html("content").getElement(),
				"attr"    : {
					"style" : "background-color : black",
					"colspan" : "1"
				},
				"css" : {
					"color" : "white"
				},
				"class" : "td-class",
				"event" : function (td) {
					td.click(function () {
						console.log("click td");
					});
				}
			},//td
			"identifier2" : new Html.Div().html("content").getElement(),//td
			"identifier3" : new Html.Div().html("content").getElement(),//td
		},
		{
			"identifier"  : new Html.Select().getElement(),
			"identifier2" : new Html.Div().html("content").getElement(),
			"identifier3" : new Html.Div().html("content").getElement(),
		}
	]);

	var modal = new Bootstrap.Modal("SetId");

	modal.setHeader("<h1>Title</h1>"); //Add string
	modal.setFooter(new Html.Div("Example")); //Add html elements
	modal.setBody(table.clone());
	modal.build();

	var div = new Html.Div();
	div.append([
		table.getElement(),
		modal.getElement()
	]);

	body.html(
		div.getElement()
	);

	modal.launch();

});