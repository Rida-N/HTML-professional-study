window.onload=function(){
	var test1Function=function(){
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
	
	//test1Function();

	// global veriaties test.
	var test2Function = function(){
		var a="global";
		f1();
		console.log('After all');
		console.log(a);
		console.log(z); // not defined error

		function f1(){
			console.log('This is f1!');
			var a ="local-f1";
			var z ="local-f1";
			console.log(a);
			console.log(z);

			f2();

			function f2(){
				console.log('This is f2!');
				var a ="local-f2";
				var z ="local-f2";
				console.log(a);
				console.log(z);
			}
		}
	};

	// test2Function();

	//closure test
	
	var testClosure = function(){
		function A() {
			var i = 1;
			var j = 2;
			return function(){
				return i++;
			};
		}

		var B = A();
		console.log('THis is B method');
		console.log(B());
		console.log(B());	

		var C =A();
		console.log('This is C method');
		console.log(C());
		console.log(C());	
	};
	/*
	// with test
	with(console){
		log("This is within With...");
		testClosure(); // no impact
	} 
	*/
	
	var testString= function(){
		var a="aaaaaa";
		var b = new String("bbbbb");
		console.log(a instanceof String);
		console.log(a instanceof Object);
		console.log(typeof a);
		console.log(typeof b);
	};	
	// testString();

	//global Variable Test
	var globalVariableTest= function(){
		var a ="global a";
		var b ="global b";
		function test(){
			var b="local b";
			console.log(a);
			console.log(b);
			var a="local a";
			console.log(a);
		}
		test();
	};

	// globalFunctionTest(); // undefined, local b,local a

	var immediateFunctionTest = function(){
		var a ="global a";
		(function testImmediate(){
			console.log(a);
			var a ="test immediate a ";
			console.log(a);
			(function testInsideImmediate(){
				console.log(a);
				a ="test inside immediate a";
				console.log(a);
				var a = "after test inside immediate a"; // delete this line, "a" will become a global variable. The results of intestInsideImmediate function and after will all be changed. 
				console.log(a);
			})();
			console.log(a);	
		})();
	};

	immediateFunctionTest();

};