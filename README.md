# Object Oriented HTML

**This library allows you to create objects such as oop but in html **
**This library is writted in typescript**

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed as:

  1. Download from output folder:

    ```html
    <script type="text/javascript" src="./js/jquery.min.js"></script>
	<script type="text/javascript" src="./js/bootstrap.min.js"></script>// not mandaroty
	<script type="text/javascript" src="../output/html_object.js"></script>
    ```

  2. How create any tag as javascript object from ooh.js

    ```javascript
    var div = new Html.Div("name");
	div.append("text sample");

    $("body").log(div.$);
    ```

    ```html
    this is the same as
    <div id="name">text sample</div>
    ```

  3. Some methods to modify this element similar to jquery

	```javascript
    var div = new Html.Div("name");
    
    div.attr("style", "background-color : white");
    div.class("custom-class");
    div.css("color", "black");

    var pre = new Html.Pre();
    pre.append([
    	"other way",
    	new Html.Br(),
    	"to append elements"
    ]);

	div.append(
		pre
	);

	//getElement method is to get jQuery object element $("")
    $("body").log(div.getElement());

    ```

    The output is:

    ```html
    <div id="name" style="background-color : white" class="custom-class" color="black">
    	<pre>
    		other way
    		<br>
    		to append elements
    	</pre>
    </div>
    ```

## Tables

  Some methods to modify this element similar to jquery

  ```javascript

	var table = new Html.Table();
	
	table.class("table");

	table.build([
		{
			"Header1" : "content tr 1 td 1",
			"Header2" : "content tr 1 td 2",
			"Header3" : "content tr 1 td 3"
		},
		{
			"Header1" : "content tr 2 td 1",
			"Header2" : "content tr 2 td 2",
			"Header3" : "content tr 2 td 3"
		},
		{
			"Header1" : "content tr 3 td 1",
			"Header2" : "content tr 3 td 2",
			"Header3" : "content tr 3 td 3"
		}
	]);

	body.html(
		table.getElement()
	);

  ```

  This code produce this html table

  ```html
	<table class="table">
		<thead id="thead">
			<tr id="tr">
				<th id="TheadTh0">
					Header1
				</th>
				<th id="TheadTh1">
					Header2
				</th>
				<th id="TheadTh2">
					Header3
				</th>
			</tr>
		</thead>
		<tbody id="tbody">
			<tr id="TbodyTr0">
				<td id="TbodyTd0header1">
					content tr 1 td 1
				</td>
				<td id="TbodyTd0header2">
					content tr 1 td 2
				</td>
				<td id="TbodyTd0header3">
					content tr 1 td 3
				</td>
			</tr>
			<tr id="TbodyTr1">
				<td id="TbodyTd1header1">
					content tr 2 td 1
				</td>
				<td id="TbodyTd1header2">
					content tr 2 td 2
				</td>
				<td id="TbodyTd1header3">
					content tr 2 td 3
				</td>
			</tr>
			<tr id="TbodyTr2">
				<td id="TbodyTd2header1">
					content tr 3 td 1
				</td>
				<td id="TbodyTd2header2">
					content tr 3 td 2
				</td>
				<td id="TbodyTd2header3">
					content tr 3 td 3
				</td>
			</tr>
		</tbody>
	</table>
  ```

  Always take the last key values to set headers

  #### Custom table elements

  ```javascript

	var table = new Html.Table();
	
	table.class("table");

	table.setHeader([
		new Html.Div().html("First header"),
		"Custom header",
		"Custom header"
	]);

	table.build([
		{
			"Header1" : {
				"content" : new Html.Div().html("first").getElement(),
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
			},
			"Header2" : new Html.Div().html("content tr 1 td 2"),
			"Header3" : "content tr 1 td 3"
		}
	]);

  ```

  html output

  ```html
	<table class="table">
		<thead id="thead">
		  	<tr id="trHeader">
		  		<th id="TheadTh0">
		  			<div>
		  				First header
		  			</div>
		  		</th>
		  		<th id="TheadTh1">
		  			Custom header
		  		</th>
		  		<th id="TheadTh2">
		  			Custom header
		  		</th>
		  	</tr>
		</thead>
		<tbody id="tbody">
		  	<tr id="TbodyTr0">
		  		<td id="TbodyTd0header1" style="background-color : black" colspan="1" color="white">
		  			<div>
		  				first
		  			</div>
		  		</td>
		  		<td id="TbodyTd0header2">
		  			<div>
		  				content tr 1 td 2
		  			</div>
		  		</td>
		  		<td id="TbodyTd0header3">
		  			content tr 1 td 3
		  		</td>
		  	</tr>
		</tbody>
	</table>
  ```

# Bootstrap helper

##Modals

How create a modal, you must get bootstrap library

```javascript

	var body = $("#body");

	var modal = new Bootstrap.Modal("SetId");

	modal.setHeader("<h1>Title</h1>"); //Add string
	modal.setBody("content");
	modal.setFooter("footer"); //Add html elements
	modal.build();

	var div = new Html.Div();
	div.append(
		modal
	);

	body.html(
		div.getElement()
	);

	modal.launch();
```
the output is the modal in the screen, also there support to tabs, others comming soon
