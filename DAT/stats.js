Sensus = {};
Entity = function(first, last, gender, species, age, height, hp, mp, spd, atk, def, spatk, spdef, element, eye, hair) {
	var temp = "a"
	for(item in Sensus){
	temp = temp + "a";
	}
	this.gender = gender;
	this.species = species;
	this.age = age;
	this.height = height;
	this.maxhp = hp;
	this.hp = hp;
	this.maxmp = mp;
	this.mp = mp;
	this.spd = spd;
	this.atk = atk;
	this.def = def;
	this.spatk = spatk;
	this.spdef = spdef;
	this.elementAlignment = element;
	this.eyeColor = eye;
	this.hairColor = hair;
	this.first = first;
	this.last = last;
	Sensus[temp] = first + last;
}
var RinnosukeMorichika = new Entity("Rinnosuke",'Morichika','Male','Half-youkai',400,"Tall",400,150,125,90,100,290,300,"Neutral","Gold","Silver");
var MarisaKirisame = new Entity("Marisa",'Kirisame','Female','Human',14,"Same",150,1000,90,30,30,300,30,"Fire",'Yellow','Blonde');
for(item in Sensus) {
console.log(eval(Sensus[item]));
}