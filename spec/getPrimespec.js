describe("getPrime Test", function(){
	describe("cases for inputs that are not integers", function(){
		it("should returns 'Invalid inputs' for 'man'", function(){
			expect(getPrimes('man')).toBe("Invalid input");
		});
		it("should returns 'Invalid inputs' for 9.023 ", function(){
			expect(getPrimes(9.023)).toBe("Invalid input")
		});
			
		it("should returns 'Invalid inputs' for [1,2,3] ", function(){
			expect(getPrimes([1,2,3])).toBe("Invalid input");
		});
	});
		
	describe("cases for integers less than one", function(){
		it(" - 20 should returns 'Input should be greater than zero'", function(){
			expect(getPrimes(-20)).toBe('Input should be greater than zero');
		});
		it("0 should returns 'Input should be greater than zero'", function(){
			expect(getPrimes(0)).toBe('Input should be greater than zero');
		});
	});
	describe("cases for integers greater than zero(0) ", function(){
		it("30 should return [2,3,5,7,11,13,17,19,23,29]", function(){
			expect(getPrimes(30)).toEqual([2,3,5,7,11,13,17,19,23,29]);
		});
		it("50 should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]", function(){
			expect(getPrimes(50)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
		});
		it("1 should return []", function(){
			expect(getPrimes(1)).toEqual([]);
		});
		it("2 should return [2]", function(){
			expect(getPrimes(2)).toEqual([2]);
		});
	});
});