window.onload=function(){
	var formstest1 = document.forms;
	console.log('***formstest1*********');
	console.log(formstest1);
	console.log(formstest1[0]);
	console.log(formstest1[1]);
	console.log(formstest1[2]);
	var formstest2 = document.getElementsByTagName('form');
	console.log('***formstest2*********');
	console.log(formstest2);
	console.log(formstest2[0]);
	console.log(formstest2[1]);
	console.log(formstest2[2]);
}