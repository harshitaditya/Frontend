// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                              // ; is compulsory because it break and go to next function. 

// Arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

