Calculator = function() {
    this.value = 0;
};
 
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        if(this.value == 0) { // first time it run so value is set to zero
            this.value = number; // will only run this line if we only have one calc.add(2); call on the calsSpec.js page. If we have two calc.add(2); values it will run the else line below because there are two values now ie this.value + this.value = number
        } else { // runs the else if it was not the first time running
            this.value += number; // runs this line because we have two calc.add(2); values ie this.value + this.value = number
        }
    } else {
        alert("Argument must be a number");
    }
        
};

Calculator.prototype.subtract = function(number) {
    if (typeof(number) == "number") {
        if(this.value == 0) { 
            this.value = number; 
        } else { 
            this.value -= number; 
        }
    } else {
        alert("Argument must be a number");
    }
        
};

Calculator.prototype.multiply = function(number) {
    if (typeof(number) == "number") {
        if(this.value == 0) { 
            this.value = number; 
        } else { 
            this.value *= number; 
        }
    } else {
        alert("Argument must be a number");
    }
        
};

Calculator.prototype.divide = function(number) {
    if (typeof(number) == "number") {
        if(number == 0)
        {
            alert("Cannot divide by zero");
        }
        else if(this.value == 0) 
        { 
            this.value = number; 
        } 
        else 
        { 
            this.value /= number; 
        }
    }
        
        else 
        {
            alert("Argument must be a number");
        }
    
        
};