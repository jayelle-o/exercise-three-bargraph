#### Exercise Three: Looping through data to create a simple bar chart.

You can find a working link to the page we created in class here: [http://chriscanipe.com/news-apps-class-2016/exercise-three/](http://chriscanipe.com/news-apps-class-2016/exercise-three/).

We loaded up our Columbia Public Schools JSON in class Tuesday and iterated through the rows using a "for loop." We touched on three main concepts:

1) Loading data via JQuery's [super simple ajax method, $.getJSON](http://www.w3schools.com/jquery/ajax_getjson.asp):

```
$.getJSON("js/filename.json", function(data) {
	doSomething(data);
})
```

2) Passed the data between functions. (See [Paramaters and Arguments](http://www.w3schools.com/js/js_function_parameters.asp))

3) We looped through our data, and appended some markup to the page to create a simple bar chart. Some references you might find useful:
* [For loops](http://www.w3schools.com/js/js_loop_for.asp)
* [Variables](http://www.w3schools.com/js/js_variables.asp)
* [Operators](http://www.w3schools.com/js/js_operators.asp)
