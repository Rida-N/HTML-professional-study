

var test0=function(){
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
		var name=str||"Rida"; // default value
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
}

var test1=function(){
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
	console.log(main.firstElementChild);
	console.log(main.lastElementChild);
	console.log(main.children);
	console.log('***BodyElement*********');
	var bodyFirst=main.firstChild;
	console.log('***bodyFirst****');	
	console.log(bodyFirst);	
	var bodyNext=bodyFirst.nextSibling;	
	console.log('***bodyNext****');	
	console.log(bodyNext);
	var nextnextSibling=bodyNext.nextSibling;
	console.log('***nextnextSibling****');	
	console.log(nextnextSibling);
	var nextnext=bodyNext.nextElementSibling;
	console.log('***nextnextElement****');	
	console.log(nextnext);
	console.log('***nextnextnextSibling****');	
	console.log(nextnext.nextSibling);
};

var test2=function(){
	var target=document.getElementById('main').firstElementChild;
	console.log(target.innerText);
	target.innerText="Now You're getting further";
	console.log('***After Change*******');
	console.log(target.innerText);
	target.parentNode.removeChild(target);

	console.log('***Add Element*******');
	var main=document.getElementById('main');
	var newElement= document.createElement('p');
	newElement.innerText='Hi, New Element Here.';
	main.appendChild(newElement);
	console.log(main);
	console.log('***Add Element**Before any element******');
	var pElements= document.getElementsByTagName('p');
	var newPElement= document.createElement('p');
	newPElement.innerText='Hi, New P element here, nice to meet you! ';
	main.insertBefore(newPElement,pElements[0]);

	console.log('***Selector Test1**ONLY P in Class****');
	var selectTargets1= document.querySelectorAll('p.hoge');
	for (var i = 0; i < selectTargets1.length; i++) {
		selectTargets1[i].style.color='red';
	}

	console.log('***Selector Test2***ALL in class***');
	var selectTargets2= document.querySelectorAll('.hoge');
	for (var i = 0; i < selectTargets2.length; i++) {
		selectTargets2[i].style.color='yellow';
	}

	console.log('***Selector Test3**First one ONLY****');
	var selectTargets3= document.querySelector('.hoge');
	selectTargets3.style.color='blue';
}
window.onload= function(){
	test2();

	var main =document.getElementById('main');
	main.addEventListener('click',function(){
		console.log(this);
	});
	var target= document.getElementById('target');
	target.addEventListener('click',function(){
		target.innerText="I've been clicked";
		console.log(this);
		event.stopPropagation();
	});
}