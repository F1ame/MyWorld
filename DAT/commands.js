UserInp = "";
OutpText = "";
Commands = {
	help: {
		name: "help: \n",
		use: "list usable terms/commands \n",
		alternates: "shared_terms: [help|-h-] \n",
		example: "example: help \n",
		func: function(){var rtn = ""; for(i in Commands){rtn = rtn + Commands[i].name + Commands[i].use + Commands[i].alternates + Commands[i].example +"\n";}return rtn}},
	travel: {
		name: "move [(north|n--)|(east|e--)|(south|s--)|(west|w--)] \n",
		use: "travel in specified _direction_ \n",
		alternates: "shared_terms: [travel|go|walk|move|--g] \n",
		example: "example: --g north \n",
		func: function(direction){var rtn = "You move " + direction;return rtn}},
	look: {
		name: "look \n",
		use: "specify a direction \n",
		alternates: "shared_terms:  \n",
		example: "example: walk east \n",
		func: function(){}},
	talk: {
		name: " \n",
		use: " \n",
		alternates: "shared_terms: \n",
		example: "example: \n",
		func: function(){}},
	inspect: {
		name: " \n",
		use: " \n",
		alternates: "shared_terms: \n",
		example: "example: \n",
		func: function(){}},
	people: {
		name: " \n",
		use: " \n",
		alternates: "shared_terms: \n",
		example: "example: \n",
		func: function(){var rtn = ""; for(item in Sensus){var temp = eval(Sensus[item]);rtn = rtn + temp['first'] + " " + temp['last'] + "\n"; for(item in temp){if(item == 'hp'||item == 'maxhp'||item == 'mp'||item == 'maxmp'||item == 'spd'||item == 'atk'||item == 'spatk'||item == 'def'||item == 'spdef'){rtn = rtn;} else if(item == 'first'||item == 'last') {rtn = rtn + "\n";}else{rtn = rtn + item + " " + temp[item] + "\n";}}};return rtn;}/*},
	: {
		name: " \n",
		use: " \n",
		alternates: "shared_terms: \n",
		example: "example: \n",
		func: function(){}},
	: {
		name: " \n",
		use: " \n",
		alternates: "shared_terms: \n",
		example: "example: \n",
		func: function(){}},
	: {
		name: " \n",
		use: " \n",
		alternates: "shared_terms: \n",
		example: "example: \n",
		func: function(){}},
	: {
		name: " \n",
		use: " \n",
		alternates: "shared_terms: \n",
		example: "example: \n",
		func: function(){}*/}
}
swch = function(wrd) {
	var werd = "";
	switch(wrd){
		case "help":
		case "-h-":
			werd = "help.func(";
			break;
		case "travel":
		case "move":
		case 'go':
		case '--g':
		case 'walk':
			werd = "travel";
			break;
		case 'n--':
		case 'north':
			werd = ".func('north'";
			break;
		case 'e--':
		case 'east':
			werd = ".func('east'";
			break;
		case 's--':
		case 'south':
			werd = ".func('south'";
			break;
		case 'w--':
		case 'west':
			werd = ".func('west'";
			break;
		case 'list':
			werd = "people.func(";
	break;
		default:
			werd="";
			break;
	}
	return werd
}
defnr = function(uiit) {
	var ustr = uiit + "^_^";
	var tempmem = "";
	var cmdphrase = "Commands.";
	var otpt = "";
	while(ustr.length > 0){
	tempmem = ustr.indexOf("^_^");
		tempmem = ustr.substr(0,tempmem);
		cmdphrase = cmdphrase + swch(tempmem);
	ustr = ustr.substr(ustr.indexOf("^_^")+3,ustr.length);
}
	cmdphrase = cmdphrase + ')';
	try {
	otpt = eval(cmdphrase);
	} catch(err) {
		otpt = ""
		};
	intprt(otpt);
}
intprt = function(uit) {
	var lg = OutpText.innerHTML;
	document.getElementById("outpt").innerHTML = uit + "\n" + lg;
}
ntrchk = function() {
	var utx = UserInp.innerHTML;
	utx = utx.replace(/ /g,"^_^");
	utx = utx.trim();
	utx = utx.replace("<div><br></div>","");
	utx = utx.replace("<div><br></div>","");
	utx = utx.toLowerCase();
	clg("u",utx.replace(/^_^/g," "));
	defnr(utx);
	document.getElementById("pinpt").innerHTML = "";
};