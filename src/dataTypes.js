function dataTypes(data){
	//checking the type of the "data" and returns its length if it is a string.
	if(typeof(data) === 'string'){
		return data.length;
	}
	else if(typeof(data) === 'boolean'){
		return data;
	}
}