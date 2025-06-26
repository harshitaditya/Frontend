function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}
one();
two();
three();

// The call stack in JavaScript is a mechanism for managing function execution in a program. 
// It's a stack data structure that tracks function calls, allowing the interpreter to know where to return after each function completes.