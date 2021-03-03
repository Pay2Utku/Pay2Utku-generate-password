
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function generatePass(){
	var charss=[];
	var your_pass = "";
	var i;
	var check = 0;
	if(document.getElementById("lowercase").checked == true){
	check = 1;
	for (i=97; i <= 122; i++){
	var res = String.fromCharCode(i);
	charss.push(res);
	}
	}
	if(document.getElementById("numbers").checked == true){
	check = 1;
	for (i=48; i <= 57; i++){
	var res = String.fromCharCode(i);
	charss.push(res);
	}
	}
	if(document.getElementById("uppercase").checked == true){
	check = 1;
	for (i=65; i <= 90; i++){
	var res = String.fromCharCode(i);
	charss.push(res);
	}
	}
	if(document.getElementById("symbols").checked == true){
	check = 1;
	for (i=33; i <= 47; i++){
	var res = String.fromCharCode(i);
	charss.push(res);
	}
	for (i=58; i <= 64; i++){
	var res = String.fromCharCode(i);
	charss.push(res);
	}
	for (i=91; i <= 96; i++){
	var res = String.fromCharCode(i);
	charss.push(res);
	}
	for (i=123; i <= 126; i++){
	var res = String.fromCharCode(i);
	charss.push(res);
	}
	}
	if (check == 0){document.getElementById('password').value = "Really? What do you want?";return;}
	if(document.getElementById("length").value<=2048 && document.getElementById("length").value>0){
		for(i=0;i < Number(document.getElementById("length").value);i++){
			myRndNumber = getRndInteger(0, charss.length);
			your_pass = your_pass.concat(charss[myRndNumber]);
	}
	}else{}
	
	document.getElementById('password').value = your_pass;
	
}