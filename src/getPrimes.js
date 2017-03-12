function getPrimes(n){
	//validating for input that are not Numbers
	if(typeof(n) !== 'number'){
		return "Invalid input";
	}
	//validating for inputs that are floats
	else if(typeof(n) === 'number' && n%1 !== 0){
		return "Invalid input";
	}
	//validating for input that are less than 1
	else{
			return 'Input should be greater than zero';
		
	}
	
}
















