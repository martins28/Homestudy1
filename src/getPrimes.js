function getPrimes(n){
	/**
	This function generates all the prime numbers from 2 to n.
	It strictly accept only non zero positive integers, if 
	compromised returns a warning message.
	**/

	//validating for input that are not Numbers
	if(typeof(n) !== 'number'){
		return "Invalid input";
	}
	//validating for inputs that are floats
	else if(typeof(n) === 'number' && n%1 !== 0){
		return "Invalid input";
	}
	//validating for input that are less than 1
	else if (n < 1){
			return 'Input should be greater than zero';
		
	}
		//initializing myList to an empty array
		const myList = [];
		//this variable indicate whether a generated number is a prime or not. with an initial value of 0
		var checker = 0;
		//generating integers from 2 up to n
		for(var i = 2; i <= n; i++){
		  		checker = 0;
		  		//checks if every generated number has a factor from 2 up to its square root.
            	for(var j = 2; j <= Math.floor(Math.sqrt(i)); j++){
            		//ckecks for factor
            		if(i% j === 0){
            			//breaks the loop and indicate it has seen a factor by initializing checker to 0
            			checker = 1;
            			break;	
            		}
            	}
            	//push a generated number into the array if it couldn't see a factor from 2 to its squareroot. means that it is a prime
            	if(checker === 0){
            		myList.push(i);
            	}
	}
	//returns the array
	return myList;

}