var str="abc";
(function(){
 	str="sdf3";
 	console.log(str.length);
 })();
 console.log(str);

console.log(5==='5');
console.log(5=='5');

sayhello();
sayhello('');
sayhello(0);
sayhello(5);
sayhello('Ellen');

function sayhello(str){
 var name=str||"Rida";
 console.log('Hello, '+name);
};

console.log('*******************************');
var objTest={
	obj1:'Hana',
	obj2:'Ochya',
	obj3:'Tokei',
	obj4:'Chyawann',
	sayhello:function(){
		console.log('Hello, '+ this.obj1);
		console.log(this);
	},
}

objTest.sayhello();

var Person=function(name){
	this.name=name;
	this.sayHello=function(){
		console.log('Hello, '+this.name);
	}
};

var sherman= new Person('Sherman');
console.log(sherman.name);
sherman.sayHello();


var SuperPerson=function(name, skill, point){
	this.name=name;
 	this.skillName= skill;
 	this.skillPoint=point;
 	this.sayGoodBye=function(){
 	console.log('GoodBye, '+ this.skillName+' '+this.name);
 } ;
} ;
SuperPerson.prototype=new Person();

var superMan= new SuperPerson('Jerry','Fire','1568');
superMan.sayGoodBye();
superMan.sayHello();

var SaiyaPerson=function(name, skill, satelite){
	this.name=name;
	this.saiYaSkill=skill;
	this.satelite=satelite;
	this.sayICanFly=function(){
		console.log('Me '+this.saiYaSkill+' '+this.name+' from '+ this.satelite+', '+'I can fly!' );
	};
};
SaiyaPerson.prototype=new Person();

var wukong=new SaiyaPerson('Wukong','super fire', 'Nameike');
wukong.sayICanFly();
wukong.sayHello();

Person.prototype.sayILoveYou=function(){
	console.log('I Love You ! by '+this.name);
};
wukong.sayILoveYou();
superMan.sayILoveYou();

console.log(Math.PI);

window.onload=function(){
	var main= document.getElementById('main');
	console.log(main);
	var pTag= document.getElementsByTagName('p');
	var body= document.getElementsByTagName('body');
	console.log('************');
	console.log(pTag);
	console.log('***FirstChild*********');
	console.log(main.firstChild);
	console.log('***LastChild*********');
	console.log(main.lastChild);
	console.log('***ChildNodes*********');
	console.log(main.childNodes);
	console.log('***Body*********');
	console.log(body);
	console.log('***Element only*********************************');

}