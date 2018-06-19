//attach a listener
$(document).ready(function(){

	//get the lastest user choice
	$.get("/api/client/user-choice", function(data){
	  console.log(data[0].choice);
	  //take the choice and get doctors array
	  $.get("/api/doctors/" + data[0].choice, function(docData){
	  	console.log(docData.length);
	  	//we have the array, create the elements
	  	var container = $("#doctorShow");
	  	for(var i = 0; i < docData.length; i++){
	  		//create column
	  		var column = $("<div>").attr("class", "column-2 w-col w-col-2");
	  		var name = $("<div>Name: </div>").attr("class", "text-block-5").text(docData[i].name);
	  		var specialty = $("<div>Specialty: </div>").text(docData[i].specialty);
	  		var address = $("<div>Address: </div>").text(docData[i].address);
	  		var city = $("<div>City :</div>").text(docData[i].city);
	  		var state = $("<div>State: </div>").text(docData[i].state);
	  		var zip = $("<div>Zip Code: </div>").text(docData[i].zipCode);
	  		var phone = $("<div>Number: </div>").text(docData[i].phoneNumber);
	  		var insurance = $("<div>Insurance: </div>").text(docData[i].insurance);
	  		var button = $("<button></button>").attr("data-id",docData[i].docID);
	  		var link = $("<a>Select</a>").attr("href", "/schedule");
	  		button.append(link);
	  		column.append(name, specialty,address,city,state,zip,phone,insurance,button);
	  		container.append(column);
	  	}

	  	//listener to element
		$("button").click(function(){
			//send the info to doctor choice
			//post for choice
			var id = {
				docId: $(this).attr("data-id")
			};

			console.log(id);
			$.post("/api/doctors/selection", id, function(){
				console.log("hi");

			});
	  });
	});
	});

	
});


