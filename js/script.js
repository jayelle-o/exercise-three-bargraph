$(document).ready(function() {
	getData();
});



function getData() {
	
	$.getJSON("js/columbia.json", function(schoolsData) {
		//Callback runs after the data is loaded.
		loopThroughData(schoolsData);
	});



}





function addTwoNumbers(num1, num2) {
	console.log(num1 + num2);
}



function loopThroughData(s) {
	
	for (i=0; i<s.length; i++) {

		var schoolName = s[i]["SCHOOL_NAME"];
		var year = s[i]["YEAR"];
		var gradPct = s[i]["GRADUATES_PCT"];

		//If graduation percent is less thatn 50%...
		//We use the `<` operator to test for values less than 50%
		//And we use `&&` to indicate an AND condition,
		//Which is that the value must also be greater than 0.
		// if (gradPct < 60 && gradPct > 0) {
		// 	//...Do this.
		// 	console.log(year, schoolName, gradPct);
		// }

		var barWidth = gradPct * 10;

		if (schoolName === "FREDERICK DOUGLASS HIGH") {
			$(".chart").append(
				"<div class='bar' style='width: "+barWidth+"px'></div>"
			);
		}


	}

}



