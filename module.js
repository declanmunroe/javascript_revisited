var poetry = "Nancy Millstone Jennings";

(function main() { //this function is called an anomunus self execution function because the function is within brackets
    var poetry = "Vogan";
    console.log("Self execution function");
})(); //Opening and closing brackets at the end tell the function to execute immediatly. Put all your functions in an anonomus function to stop them from poluting the global scope

function main() {
    var poetry = "Grunthos the Flautent";
    console.log("regular function");
}

main();
console.log(poetry);