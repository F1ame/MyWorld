lodd = function() {
	UserInp = document.getElementById("pinpt");
OutpText = document.getElementById("outpt");
	UserInp.focus();
}
WasEnterPressed = function(evt) {
//clg('p','keychk');
	UserInp.focus();
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charStr = String.fromCharCode(charCode);
	if(charCode == 13){
		ntrchk();
	};
	//clg('c','keychk');
};
function RunGame(){
	clgs();
	clg("i","RunGame");
	clg("p","RunGame");
	clg("l","game.css");
	document.getElementById("pagestylesheet").setAttribute("href", "DAT/game.css");
	clg("c",'game.css');
	UserInp.focus();
//	clg('i','add eventlistener keydown');
//	UserInput.addEventListener("keydown", keychk);
//	clg('c','add eventlistener keydown');
	clg('c','RunGame');
}