describe("whatCanIDrink", function() {
    
    it("Should return 'Sorry blah blah blah'", function() {
        expect(whatCanIDrink(-1)).toBe("Sorry I cant tell what drink because that age is incorrect")
    });
    
    it("Should return 'Sorry blah blah blah'", function() {
        expect(whatCanIDrink(13)).toBe("Drink Toddy")
    });
    
    it("Should return 'Sorry blah blah blah'", function() {
        expect(whatCanIDrink(17)).toBe("Drink Coke")
    });
    
    it("Should return 'Sorry blah blah blah'", function() {
        expect(whatCanIDrink(20)).toBe("Drink Beer")
    });
    
    it("Should return 'Sorry blah blah blah'", function() {
        expect(whatCanIDrink(120)).toBe("Drink Whiskey")
    });
    
    it("Should return 'Sorry blah blah blah'", function() {
        expect(whatCanIDrink(140)).toBe("Sorry I cant tell what drink because that age is incorrect")
    });
});