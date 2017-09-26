describe("Calculator", function() {
 
    beforeEach(function() { //beforeEach creates a brand new calculator for each test
        calc = new Calculator();
    });
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
    describe('Subtraction function', function() {
        it('should subtract two numbers together and return the result', function() {
            calc.subtract(6);
            calc.subtract(1);
            expect(calc.value).toBe(5);
        });
 
        it("should not return 5 if the numbers given don't add up to 4", function() {
            calc.subtract(12);
            calc.subtract(3);
            expect(calc.value).toBe(9);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.subtract();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
     describe('Multiplication function', function() {
        it('should subtract two numbers together and return the result', function() {
            calc.multiply(5);
            calc.multiply(2);
            expect(calc.value).toBe(10);
        });
 
        it("should not return 5 if the numbers given don't add up to 4", function() {
            calc.multiply(12);
            calc.multiply(0);
            expect(calc.value).toBe(0);
        });
        
        it("should not return 5 if the numbers given don't add up to 4", function() {
            calc.multiply(3);
            calc.multiply(4);
            expect(calc.value).toBe(12);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.multiply();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
    describe('Divide function', function() {
        it('should subtract two numbers together and return the result', function() {
            calc.divide(4);
            calc.divide(2);
            expect(calc.value).toBe(2);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.divide(6);
            calc.divide(0);
            expect(window.alert).toHaveBeenCalledWith("Cannot divide by zero");
        });
        
        it("should not return 5 if the numbers given don't add up to 4", function() {
            calc.divide(12);
            calc.divide(4);
            expect(calc.value).toBe(3);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.divide();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});