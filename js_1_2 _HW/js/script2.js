'use strict';

var names = [];

for (var i = 0; i < 5; i++) {
	names.push(prompt('Enter name', ''));
}

var name = prompt('Enter name for the search', '');

if (contains(name, names)) {
	alert(name + ' , You entered succesfully');
}else{
	alert('Name was not found');
}


function contains(value, array) {
	for (var i = 0; i < array.length; i++){
		if (array[i] === value) {
			return true;
		}
	}
return false;
}