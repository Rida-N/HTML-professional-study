window.onload=function(){
	var body=document.getElementsByTagName('body')[0];
	var boxes=document.getElementsByClassName('box');
	var valuetest=0xfffffff1;
	var storage=localStorage;
	var bg=storage.getItem('background');

	// use localStorage
	//if(bg)body.style.backgroundColor = bg;
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click',function(){
			body.style.backgroundColor=this.id;
			storage.setItem('background',this.id);
			var elementtest=document.getElementById(this.id);
			if(this.id=="green"){elementtest.innerText=typeof valuetest;}
		else {elementtest.innerText=valuetest; /** answer is 64 ,not 100**/}
	});
	}
	var array_1=new Array();
	array_1.foo="sa/dfs";
	array_1.bar="de/dfs";
	array_1.hoge="asd/dfs";
	// use yield
	function* func(){
		console.log(array_1.foo);
		yield 1;
		console.log(array_1.bar);
		yield 2;
		console.log(array_1.hoge);
		yield 3;
	}
	f=func();
	f.next();
	f.next();

	// normal obj
	var testObj_1=new Object();
	testObj_1.testMethod=function(){
		console.log('Test Method!');
	};
	testObj_1.testMethod();

	// function obj
	var testObj_2=function(name,age){
		this.name=name;
		this.age=age;
		this.sayHello=function(){
			return ("Hello, my name is"+name+". I'm "+age+" years old.");
		};
	};
	var girl= new testObj_2("Alice",20);
	girl.sleep=function(){
		console.log(girl.name+'is going to sleep. :)');
	};
	girl.sleep();
	var boy=new testObj_2("Sherlock",45);
	// boy.sleep();// ERROR!
	console.log(boy.sayHello());
};