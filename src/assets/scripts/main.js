export class Employee {
	constructor(name){
		this._name = name;
	}

	get name(){
		return this._name;
	}

	doWork {
		return '${this._name} is working';
	}
}

// function testModule(){
// 	var foo = function(){
// 		console.log("Return foo result");
// 	};

// 	var bar = function(){
// 		console.log("Return bar result");
// 	};

// 	return bar;
// }
