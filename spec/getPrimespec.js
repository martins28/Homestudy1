describe("getPrime Test", function(){
	describe("cases for inputs that are not integers", function(){
		it("should returns 'Invalid inputs' for 'man'", function(){
			expect(getPrimes('man')).toBe("Invalid inputs");
		});
		it("should returns 'Invalid inputs' for 9.023 ", function(){
			expect(getPrimes(9.023)).toBe("Invalid inputs")
		});
			
		it("should returns 'Invalid inputs' for [1,2,3] ", function(){
			expect(getPrimes([1,2,3])).toBe("Invalid inputs");
		});
	});
		
	describe("cases for integers less than one", function(){
		it(" - 20 should returns 'Input should be greater than zero'", function(){
			expect(getPrimes(-20)).toBe('Input should be greater than zero');
		});
		it("0 should returns 'Input should be greater than zero'", function(){
			expect(getPrimes(0)).toEqual('Input should be greater than zero');
		});
	});
	describe("cases for small integers greater than zero(0) ", function(){
		it("30 should return [2,3,5,7,11,13,17,19,23,29]", function(){
			expect(getPrimes(30)).toEqual([2,3,5,7,11,13,17,19,23,29]);
		});
		it("50 should return [2,3,5,7,11,13,17,19,23,29, 31,37,41,43,47]", function(){
			expect(getPrimes(50)).toBe([2,3,5,7,11,13,17,19,23,29, 31,37,41,43,47]);
		});
		it("1 should return []", function(){
			expect(getPrimes(1)).toBe([]);
		});
		it("2 should return [2]", function(){
			expect(getPrimes(2)).toBe([2]);
		});
	});
	
	describe("cases for large integers", function(){
		it("200 should return [2,3,5,7,11,13,17,19,23,29,31,37,1,43,47,53,59,61,67,71,73,79,83,89,97,101,103, 107, 109, 113,127,131,137, 139, 149,151,157, 163, 167, 173, 179,181, 191, 193,197, 199]", function(){
			expect(getPrimes(200)).toBe([2,3,5,7,11,13,17,19,23,29,31,37,1,43,47,53,59,61,67,71,73,79,83,89,97,101,103, 107, 109, 113,127,131,137, 139, 149,151,157, 163, 167, 173, 179,181, 191, 193,197, 199]);
		});
		it("300 should return [2,3,5,7,11,13,17,19,23,29,31,37,1,43,47,53,59,61,67,71,73,79,83,89,97,101,103, 107, 109, 113,127,131,137, 139, 149,151,157, 163, 167, 173, 179,181, 191, 193,197, 199, 211,223, 227, 229,233, 239, 241, 251, 257, 263, 269, 271, 277, 283,293]", function(){
			expect(getPrimes(300)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,1,43,47,53,59,61,67,71,73,79,83,89,97,101,103, 107, 109, 113,127,131,137, 139, 149,151,157, 163, 167, 173, 179,181, 191, 193,197, 199, 211,223, 227, 229,233, 239, 241, 251, 257, 263, 269, 271, 277, 283,293]);
		});
	});
});