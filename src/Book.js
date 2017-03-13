/*A book class describing all kinds of books
Constructors: Title, Author, YearOfPublication
Methods:   print(Prints on screen all of its attributes)
*/

// function Book(title, authour, yearOfPub){
// 		this.title = title;
// 		this.authour = authour;
// 		this.yearOfPub = yearOfPub;
// 	}
	
// }





class Book{
	constructor(title, authour, yearOfPub){
		this.title = title;
		this.authour = authour;
		this.yearOfPub = yearOfPub;
	}
	
    print(){
        console.log("Title: " + this.title);
        console.log("Author: " + this.authour);
        console.log("Year of publication: " + this.yearOfPub.toString());
    }
}



/*
eBook:Book published digitally
Methods: getSize.
*/
class eBook extends Book{
    constructor(title, author, year,size){
        super(title, author, year);
        this.size = size;

    }
    getSize(){
        return this.size;
    }
}

/*
 A Physical book.
Attributes: getDimensions, getWeight, print(prints all its attributes)
*/

class PrintedBooks extends Book {

    constructor(title, author, year, weit, dimen){
        super(title, author, year);
        this.weight = weit;
        this.dimension = dimen;
    }
    
    print(){
        super.print();
        console.log("Weight: " + weight);
        console.log("Dimension: " + weight);
    }
}

/*
 A book which contains dramatic stories.
 Attributes: Time, place.
 Methods: getTime, getPlace, print(Prints on screen all of its attributes)
*/

class DramaBook extends Book {

    constructor(author, title, year, time, place){
        super(title,author, year);
        this.time = time;
        this.place = place;
    }
    
    print(){
        super.print();
        console.log("The time: " + this.time.toString());
        console.log("The place: " + this.place.toString());
    }
}

/*
An ebook which meets the characteristics of a Drama book
Methods: print(Prints on screen all of its attributes)
*/
class eDramaBook extends DramaBook{
	constructor(author, title, year, time, place, size){
		super(author, title, year, time, place, size);
		this.size = size;
	}
	print(){
		super.print();
		this.size = size;
	}
}




