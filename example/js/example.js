$(function () {
	
	var body = $("#body");

	var table = new Html.Table();
	table.class("table table-striped");

	table.buildHeader({
		"id1" : "custom1",
		"id2" : "custom2",
		"id3" : "custom3"
	});

	table.build([
		{
			"identifier"  : new Html.Div().html("content").getElement(),//td
			"identifier2" : new Html.Div().html("content").getElement(),//td
			"identifier3" : new Html.Div().html("content").getElement(),//td
		},
		{
			"identifier"  : new Html.Select().getElement(),
			"identifier2" : new Html.Div().html("content").getElement(),
			"identifier3" : new Html.Div().html("content").getElement(),
		}
	]);

	body.html(
		table.getElement()
	);
});