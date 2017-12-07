clgs = function(){
	console.log("success");}
clg = function(step, name){
txl = "";
txs = "";
switch(step){
case "r":
txs = "requesting: ";
break;
case "i":
txs = "initialising: ";
break;
case "p":
txs = "performing: ";
break;
case "c":
txs = "completed: ";
break;
	case "u":
		txs = "user inputed: ";
		break;
	case "o":
		txs = "refined command: ";
		break;
	case "k":
		txs = "key: ";
		break;
	case "l":
		txs = "loading: ";
		break;
default:
txs = "unknown step: ";
break;};
	txl = txs + name;
	console.log(txl);}