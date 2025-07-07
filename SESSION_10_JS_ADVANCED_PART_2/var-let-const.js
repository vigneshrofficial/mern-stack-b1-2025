// Var is function scoped, not block scoped
function testFunction(){
    if(true){
        var x = 10
    }
    console.log(x); 
}

// testFunction()

// Let is block scoped
function testLetFunction(){
    let y = 10; // Declare y with let
    if(true){
        let y = 20;
        // console.log(y); 
    }

    y = 15;

    console.log(y); 
}

// testLetFunction();

// Const is also block scoped
function testConstFunction(){
    const z = 30; // Declare z with const
    if(true){
        const z = 20;
        // console.log(z); 
    }

    // z = 35;

    console.log(z); 
}

// testConstFunction();


"use strict";
x = 10;

