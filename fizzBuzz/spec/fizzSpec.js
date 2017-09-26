describe("FizzBuzz", function() {
    
    
    
    it("should return FizzBuzz if the number is divisible by 3 or 5", function() {
        expect(FizzBuzz(15)).toBe("FizzBuzz");
    });
    
    it("should return Fizz if the number is divisible by 3", function() {
        expect(FizzBuzz(9)).toBe("Fizz");
    });
    
    it("should return Buzz if the number is divisible by 5", function() {
        expect(FizzBuzz(10)).toBe("Buzz");
    });
    
    it("should return the number if the number is not divisible by 3 and 5", function() {
        expect(FizzBuzz(11)).toBe(11);
    });
});