window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init(){
	getEventListeners();
};

function getEventListeners(){
	//View All Treatments Button
	document.insulinForm.lookupAll.addEventListener('click', getAllTreatments);
	//Create New Treatment Button
	document.createNewTreatment.save.addEventListener('click', sendNewTreatment);
	
};



// GET ALL TREATMENTS
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




// GET SINGLE TREATMENT
function addEventListenerId(tdId, id){
//	console.log(tdId);
	tdId.addEventListener('click', function(e){
		e.preventDefault(); 
//		console.log(id); 
		getTreatmentById(id); 
	});
	}

function displayTreatmentsNotFound(){
	var div = document.createElement('div');
	div.textContent = 'Treatments Not Found'; 
	document.body.appendChild(div); 
}

function getTreatmentById(id){
//	console.log(id); 
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
				displayTreatment(treatment); 
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

function displayTreatment(treatment) {
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
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');
	var td5 = document.createElement('td');
	
	td1.textContent = treatment.treatmentDate.substring(0,10);
//	console.log(treatment.treatmentDate); 
	td2.textContent = treatment.treatmentDate.substring(12, 16); 
	td3.textContent = treatment.units;
	td4.textContent = treatment.brand;
	td5.textContent = treatment.type;
	
	trow.appendChild(td1);
	trow.appendChild(td2); 
	trow.appendChild(td3);
	trow.appendChild(td4);
	trow.appendChild(td5);
	
	// Update button: <button name="updateTreatmentForm">Update Treatment</button><br>
	var form = document.createElement('form');
	var button = document.createElement('button');
//	button.setAttribute('name','updateTreatmentForm');
	button.textContent = 'Update Treatment'; 
	button.addEventListener('click', function(e){
		e.preventDefault();
//		console.log(treatment); 
		displayUpdateForm(treatment);
	}); 
	form.appendChild(button); 
	
	tbody.appendChild(trow); 
	table.appendChild(tbody); 
	
	div.appendChild(table);
	document.body.appendChild(div);
	document.body.appendChild(form);
}




// CREATE NEW TREATMENT
function sendNewTreatment(evt) {
	evt.preventDefault(); 
	var form = document.createNewTreatment;
	var insulinTreatment = {
		units: form.units.value,
		type: form.type.value,
		brand: form.brand.value
	};
//	console.log(insulinTreatment);
	var treatmentJson = JSON.stringify(insulinTreatment); 
//	console.log(treatmentJson); 
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/treatments', true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function(){
		if(this.readyState === 4) {
			if(this.status === 200 || this.status === 201){
				var newTreatmentJson = this.responseText;
				var newTreatmentObj = JSON.parse(newTreatmentJson);
				
				displayTreatment(newTreatmentObj);
			}
			else {
				displayTreatmentNotSaved();
			}
		}
	}
	
	xhr.send(treatmentJson);
}

function displayTreatmentNotSaved(){
	var div = document.createElement('div');
	div.textContent = 'Unable to save treatment, please try again.';
	document.body.appendChild(div); 
}


//UPDATE TREATMENT
function displayUpdateForm(treatment){
//	console.log(treatment); 
	var form = document.getElementById('updateTreatment'); 
	var header = document.createElement('h4');
	header.textContent = 'Update Treatment:';
	form.appendChild(header); 
	
	var p1 = document.createElement('p');
	p1.textContent = 'Units:';
	var input1 = document.createElement('input');
	input1.setAttribute('type', 'number');
	input1.setAttribute('name', 'units');
//	console.log(treatment.units);
	input1.setAttribute('value', treatment.units);
	
	var p2 = document.createElement('p');
	p2.textContent = 'Brand:';
	var input2 = document.createElement('input');
	input2.setAttribute('type', 'text');
	input2.setAttribute('name', 'brand');
	input2.setAttribute('value', treatment.brand);
	
	var p3 = document.createElement('p');
	p3.textContent = 'Type:';
	var input3 = document.createElement('input');
	input3.setAttribute('type', 'text');
	input3.setAttribute('name', 'type');
	input3.setAttribute('value', treatment.type);
	
	var button = document.createElement('button');
	button.setAttribute('id', treatment.id);
	button.textContent = 'Submit';
	button.addEventListener('click', updateTreatment);
	
	form.appendChild(p1);
	form.appendChild(input1);
	form.appendChild(p2);
	form.appendChild(input2);
	form.appendChild(p3);
	form.appendChild(input3);
	form.appendChild(button); 
	
}

function updateTreatment(e){
	e.preventDefault();
//	console.log(e); 
	var form = document.updateTreatment; 
	var insulinTreatment = {
			units: form.units.value,
			type: form.type.value,
			brand: form.brand.value
		};
//	console.log(insulinTreatment); 
	var treatmentJson = JSON.stringify(insulinTreatment); 
	var xhr = new XMLHttpRequest();
//	console.log(this.id);
	xhr.open('PATCH', 'api/treatments/' + this.id, true);
	xhr.setRequestHeader('Content-type', 'application/json');
	
	xhr.onreadystatechange = function(){
		if(this.readyState === 4){
			if(this.status === 200) {
				var updatedTreatmentJson = this.responseText;
				var updatedTreatmentObj = JSON.parse(updatedTreatmentJson);
				
				displayTreatment(updatedTreatmentObj);
			}
		}
		else {
			displayTreatmentNotSaved();
		}
	}
	
	xhr.send(treatmentJson); 
}