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
	
	var table = document.createElement('table'); 
	div.appendChild(table);
	
	var thead = document.createElement('thead');
	var tHeadRow = document.createElement('tr');
	
	var tHeadD0 = document.createElement('td');
	var tHeadD1 = document.createElement('td');
	var tHeadD2 = document.createElement('td');
	
	tHeadD0.textContent = 'ID'; 
	tHeadD1.textContent = 'Treatement Date';
	tHeadD2.textContent = 'Insulin Units';
	
	tHeadRow.appendChild(tHeadD0); 
	tHeadRow.appendChild(tHeadD1);
	tHeadRow.appendChild(tHeadD2);
	
	thead.appendChild(tHeadRow);
	table.appendChild(thead);
	
	var tbody = document.createElement('tbody');
	
	for(let i = 0; i < treatments.length; i++){
		var trow = document.createElement('tr');
		var td0 = document.createElement('td');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		
		console.log(treatments[i]);
		td0.textContent = treatments[i].id;
		
		
		td1.textContent = treatments[i].treatmentDate.substring(0,10);
		td2.textContent = treatments[i].units;
		
		trow.appendChild(td0); 
		trow.appendChild(td1); 
		trow.appendChild(td2);
		console.log()
		addEventListenerId(td0, treatments[i].id); 
		tbody.appendChild(trow);
	}
	
	table.appendChild(tbody);
}

function addEventListenerId(tdId, id){
//	console.log(tdId);
	tdId.addEventListener('click', function(e){
		console.log(id); 
		getTreatmentById(id); 
	});
	}

function displayTreatmentsNotFound(){
	var div = document.createElement('div');
	div.textContent = 'Treatments Not Found'; 
	document.body.appendChild(div); 
}

function getTreatmentById(id){
	// do I want to do evt.preventDefault(); ??? test both ways
	console.log(id); 
	var xhr = new XMLHttpRequest();
	
	xhr.open('GET', "api/treatments/" + id, true);
//	console.log(xhr.readyState);
	
	xhr.onreadystatechange = function(){
//		console.log(xhr.readyState); 
		if (xhr.readyState === 4) {
			if(xhr.status === 200){
//				console.log(xhr.readyState);
				var treatmentJson = this.responseText;
				var treatment = JSON.parse(treatmentJson); 
//				console.log(treatment); 
				displayTreatmentById(treatment); 
			}
			else {
				displayTreatmentNotFound(); 
			}
		}
	}
	
	xhr.send(null); 
}

function displayTreatmentNotFound(){
	var div = document.createElement('div');
	div.textContent = 'Treatment Not Found'; 
	document.body.appendChild(div); 
}

function displayTreatmentById(treatment) {
	var div = document.createElement('div'); 
	
	var table = document.createElement('table'); 
	
	// table head creation
	var thead = document.createElement('thead');
	var tHeadRow = document.createElement('tr');
	
	var tHD1 = document.createElement('td'); 
	var tHD2 = document.createElement('td');
	var tHD3 = document.createElement('td');
	var tHD4 = document.createElement('td');
	var tHD5 = document.createElement('td');
	
	tHD1.textContent = 'Treatment Date'; 
	tHD2.textContent = 'Time';
	tHD3.textContent = 'Units';
	tHD4.textContent = 'Brand';
	tHD5.textContent = 'Type';
	
	tHeadRow.appendChild(tHD1);
	tHeadRow.appendChild(tHD2);
	tHeadRow.appendChild(tHD3);
	tHeadRow.appendChild(tHD4);
	tHeadRow.appendChild(tHD5);
	
	thead.appendChild(tHeadRow);
	table.appendChild(thead);
	
	//table body creation
	var tbody = document.createElement('tbody');
	var trow = document.createElement('tr'); 
	var td1 = document.createElement('td'); 
	var td2 = document.createElement('td');
	
	td1.textContent = treatment.treatmentDate.substring(0,10);
	console.log(treatment.treatmentDate); 
	td2.textConent = treatment.treatmentDate; 
	
	trow.appendChild(td1);
	trow.appendChild(td2); 
	tbody.appendChild(trow); 
	table.appendChild(tbody); 
	
	div.appendChild(table);
	document.body.appendChild(div);
}