function dataTypes(data){
	//check the type of the input(data) and returns its length if it is a string.
	if(typeof(data) === 'string'){
		return data.length;
	}
	//check the type of the input(data) and returns its value  if it is a boolean.
	else if(typeof(data) === 'boolean'){
		return data;
	}
	//checks if the argument pass in is a number
	else if(typeof(data) === 'number'){
		//returns the string ‘less than 100’ if the number(data) is less than 100
		if(data < 100){
			return  "less than 100";
		}
		//returns the string ‘more than 100’ if the number(data) is less than 100
		else if(data > 100){
			return "more than 100";
		}
		//returns 'equal to 100' if number(data) is equal to 11
		else{
			return "equal to 100";
		}
	}
	else if(Array.isArray(data)){
		//returns undefined if the length of the array is less than 3
		if(data.length < 3){
			return undefined;
		}
		//returns the third element of the array
		else{
			return data[2];
		}
	}
}