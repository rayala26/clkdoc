var monday = ["8","9","10","11","12","13","14","15","16"]; 
var tuesday = ["8","9","10","11","12","13","14","15","16"]; 
var wednesday = ["8","9","10","11","12","13","14","15","16"]; 
var thursday = ["8","9","10","11","12","13","14","15","16"];
var friday = ["8","9","10","11","12","13","14","15","16"];

var s = {
	day: "",
	time: "",
	clientClientID: 1,
	ScheduleScheduleID: 0

}

$(document).ready(function(){
	//get the latest choice
	$.get("/api/doctors/selection",  function(data){
		//we have an array that contains what the user selected
		//get schedule
		$.get("/api/schedule/" + data[0].docId, function(schedule){
			console.log(schedule);
			//we have the schedule which is an array of objects
			//we need to clean the existing arrays
			for(var i = 0; i < schedule.length; i++){
				if(schedule[i].day === "Monday"){
					//check to remove from array
					var index = monday.indexOf(schedule[i].time); 
					if(index > -1){
						//means we found the element
						monday.splice(index, 1);
					}
				}
				else if(schedule[i].day === "Tuesday"){
					//check to remove from array
					var index = tuesday.indexOf(schedule[i].time); 
					if(index > -1){
						//means we found the element
						tuesday.splice(index, 1);
					}

				}
				else if(schedule[i].day === "Wednseday"){
					//check to remove from array
					var index = wednesday.indexOf(schedule[i].time); 
					if(index > -1){
						//means we found the element
						wednesday.splice(index, 1);
					}

				}
				else if(schedule[i].day === "Thursday"){
					//check to remove from array
					var index = thursday.indexOf(schedule[i].time); 
					if(index > -1){
						//means we found the element
						thursday.splice(index, 1);
					}

				}
				else if(schedule[i].day === "Friday"){
					//check to remove from array
					var index = friday.indexOf(schedule[i].time); 
					if(index > -1){
						//means we found the element
						friday.splice(index, 1);
					}

				}
			}
			console.log("Monday: " + monday);
			console.log("Tuesday" + tuesday);
			console.log(wednesday + "\n" + thursday + '\n'  +friday);

			//all arrays are cleaned up, time to populate the dropdowns
			for(var i = 0; i < monday.length; i++){
				var option = $("<option>");
	  			option.attr("time", monday[i]);
	  			option.text(monday[i] + ":00");
	  			$("#monday").attr("data-id",schedule[0].ScheduleScheduleID);
	  			$("#monday").attr("day", "Monday");
				$("#monday").append(option);
			}
				for(var i = 0; i < tuesday.length; i++){
				var option = $("<option>");
	  			option.attr("data-id", schedule[0].ScheduleScheduleID);
	  			option.text(tuesday[i]+ ":00");
	  			option.attr("time", tuesday[i]);
	  			$("#tuesday").attr("data-id",schedule[0].ScheduleScheduleID);
	  			$("#tuesday").attr("day", "Tuesday");
				$("#tuesday").append(option);
			}
				for(var i = 0; i < wednesday.length; i++){
				var option = $("<option>");
	  			option.attr("data-id", schedule[0].ScheduleScheduleID);
	  			option.text(wednesday[i]+ ":00");
	  			option.attr("time", wednesday[i]);
	  			$("#wednesday").attr("data-id",schedule[0].ScheduleScheduleID);
	  			$("#wednesday").attr("day", "Wednseday");
				$("#wednesday").append(option);
			}
				for(var i = 0; i < thursday.length; i++){
				var option = $("<option>");
	  			option.attr("data-id", schedule[0].ScheduleScheduleID);
	  			option.text(thursday[i]+ ":00");
	  			option.attr("time", thursday[i]);
	  			$("#thursday").attr("data-id",schedule[0].ScheduleScheduleID);
	  			$("#thursday").attr("day", "Thursday");
				$("#thursday").append(option);
			}
				for(var i = 0; i < friday.length; i++){
				var option = $("<option>");
	  			option.attr("data-id", schedule[0].ScheduleScheduleID);
	  			option.text(friday[i]+ ":00");
	  			option.attr("time", friday[i]);
	  			$("#friday").attr("data-id",schedule[0].ScheduleScheduleID);
	  			$("#friday").attr("day", "Friday");
				$("#friday").append(option);
			}
			//at this point, all the dropdowns are populated
			//now lets make a post to the appointment table

		});

	});

		//attach a listener to the selected element
	$("select").change(function(){
	
		console.log($(this).attr("data-id"));
		console.log($(this).attr("day"));
		console.log($(this).val());

		var d = $(this).attr("day");
		var schedId = $(this).attr("data-id");
		var t = $(this).val();
		t.split(":");
		t = t[0];

		
		s.day= d;
		s.time = t;
		s.ScheduleScheduleID= parseInt(schedId);

		console.log(s);
		
	});

	$("button").click(function(e){
//        e.preventDefault();
		//post for choice
		$.post("/api/doctors/appointment",s, function(){
        	console.log("hi")
      	});
        alert('You have an appointment!!!')
        
    });
});