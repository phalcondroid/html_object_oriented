# Object oriented HTML

**This library allows you to create objects such as oop but in html **
**This library is writted in typescript**

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed as:

  2. Download from output folder:

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
## Cool way to table creation

  Some methods to modify this element similar to jquery
