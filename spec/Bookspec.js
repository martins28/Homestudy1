describe("Book test", function(){
	describe("create a Book class and prints all its attributes", function(){
		it("the book should be a type of object and instance of Book", function(){
			var book = new Book('The Killer', 'Mr Smith', 2015);
			expect(typeof(book)).toBe(typeof({}));
			expect(book instanceof Book).toBeTruthy();
		});
		it('the book author, title and yearOfPub should be a property of a book', function(){
			var book = new Book('The Killer', 'Mr Smith', 2015);
			expect(book.title).toBe('The Killer');
			expect(book.authour).toBe('Mr Smith');
			expect(book.yearOfPub).toBe(2015);
		});
	});
	describe("create an eBook", function(){
			it('the ebook should be a type of object and instance of ebook', function(){
				var ebook = new eBook('Network', 'David Mark',2017, '50kb');
				expect(typeof(ebook)).toBe(typeof{});
				expect(ebook instanceof eBook).toBeTruthy();
			});
			it('eBook should be able to inherint from Book. eBook should be also be an instanceof Book', function(){
				var ebook = new eBook('Network', 'David Mark',2017, '50kb');
				expect(ebook instanceof Book).toBeTruthy();
			});
		});
		describe('create a drama book', function(){
			it('dramabook should be a typeof object an instance of DramaBook', function(){
				var dramabook = new DramaBook('The Killer', 'Victor Smith', 2015, 1996, 'Nigeria');
				expect(dramabook instanceof DramaBook).toBeTruthy();
			});
			it('place should be a property of DramaBook', function(){
				var dramabook = new DramaBook('The Killer', 'Victor Smith', 2015, 1996, 'Nigeria');
				expect(dramabook.place).toBe('Nigeria');

			});

		});
			describe('create a printed books', function(){
				it('printedbooks should be an instance of PrintedBoooks and a type of object', function(){
					var printedbook = new PrintedBooks('Never Give Up', 'Alienyi David', 2017, '20g', '4m by 3m by 2m');
					expect(typeof(printedbook)).toBeTruthy();
					expect(printedbook instanceof PrintedBooks).toBeTruthy();
				});
				it('printedbook should have the attribute weight', function(){
					var printedbook = new PrintedBooks('Never Give Up', 'Alienyi David', 2017, '20g', '4m by 3m by 2m');
					expect(printedbook.weight).toBe('20g');
				});
		});

});