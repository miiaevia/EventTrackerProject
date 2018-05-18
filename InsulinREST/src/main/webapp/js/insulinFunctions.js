window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init(){
	getEventListeners();
};

function getEventListeners(){
	//View All Treatments Button
	document.insulinForm.lookupAll.addEventListener('click', getAllTreatments)
};

function getAllTreatments(evt){
	evt.preventDefault();
	var xhr = new XMLHttpRequest();
	
	xhr.open('GET', "api/treatments" , true);
//	console.log(xhr.readyState); 
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if(xhr.status === 200){
//				console.log(xhr.readyState);
				var treatmentsJson = this.responseText;
				var treatments = JSON.parse(treatmentsJson); 
//				console.log(treatments); 
				displayTreatments(treatments); 
			}
			else {
				displayTreatmentsNotFound(); 
			}
		}
	}
	xhr.send(null); 
}


function displayTreatments(treatments){
	var div = document.createElement('div');
	document.body.appendChild(div); 
	var ol = document.createElement('ol'); 
	div.appendChild(ol);
	
	for(let i = 0; i < treatments.length; i++){
		var li = document.createElement('li'); 
		li.textContent = treatments[i].units;
		ol.appendChild(li);
	}
}

function displayTreatmentsNotFound(){
	//get div and add text content
}