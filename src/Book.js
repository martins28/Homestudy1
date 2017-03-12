/*A book class describing all kinds of books
Constructors: Title, Author, YearOfPublication
Methods: getTitle, getAuthor, getYearOfPublication, print(Prints on screen all of its attributes)
*/
class Book{
	constructor(title, authour, yearOfPub){
		this.title = title;
		this.authour = authour;
		this.yearOfPub = yearOfPub;
	}
	getTitle(){
        return title;
    }
    getAuthor(){
        return author;
    }
    getYearOfPublication(){
        return yearOfPub;
    }
    print(){
        console.log("Title: " + this.title);
        console.log("Author: " + this.authour);
        console.log("Year of publication: " + this.yearOfPub.toString());
    }
}

