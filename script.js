//EXAMPLE
function sayHi(callback){
    console.log('HI');
    console.log(callback);
    callback();
}
function sayBye(){
    console.log("BYE");

}
sayHi(sayBye);

//EXAMPLE
function name1(a,callback){
    console.log(`${a} is here`)
     console.log(callback("sowbaghya"))
 }
 function city(b){
     return b
 }
name1("chinni",city);

/**
Simple Logging Callback
Write a function called logger that takes a string and logs it to the console. Then, create another function processString that accepts a string and a callback function. Use the logger function as the callback to log the string.
 */
function logger(){
    var str = 'Pavan Kalyan';
    console.log(str);
}
function processString(callback){
    callback();
}
processString(logger);

/**
Array Processing
Write a function processArray that takes an array and a callback function. The callback should process each element of the array. Pass a callback that doubles each element and logs the results.
*/

//Function
function processArray(arrParam, callback){
    callback(arrParam);
}

//Callback Function
function array(X){
    var newArr = [];
    for(var i = 0; i<X.length;i++){
        X[i] = X[i]*2
        newArr.push(X[i]);
    }
    console.log(newArr);

}

var arr = [10,20,30,40,50];

processArray(arr, array);


//Math Operations
//Create a function performOperation that takes two numbers and a callback function. The callback should define an operation (e.g., addition, multiplication). Pass in different operations as callbacks to see different results.
function performOperation(a,b,callback){
callback(a,b);
}
function mathOperations(x,y){
    console.log(`The Sum of two nums is:${x+y}`);
    console.log(`The Subtract of two nums is:${x-y}`);
    console.log(`The Product of two nums is:${x*y}`);
    console.log(`The Divide of two nums is:${x/y}`);
    console.log(`The Remainder of two nums is:${x%y}`);
}
performOperation(20,12,mathOperations);

//String Manipulation
//Write a function modifyString that takes a string and a callback function. The callback should define how the string is modified (e.g., converting to uppercase, reversing the string).
function modifyStr(str,callback){
    callback(str);
}
function strUpdation(string){
    //TO UPPER CASE
    newStr = string.toUpperCase();
    console.log(newStr);

    //REVERSING STRING
    var reverseStr = '';
    for(var i=(string.length-1);i>=0;i--){
        reverseStr  += string[i];
    }
    console.log(reverseStr);
}
modifyStr('Pavan Kalyan', strUpdation);


//Event Simulation
//Simulate a button click by creating a function simulateClick that accepts a callback function. The callback should log a message like "Button was clicked."
function stimulateClick(num, callback){
    callback(num);
}
function clickMsg(x){
    console.log(`BUTTON CLICKED ${x} TIMES`);
}
stimulateClick(10, clickMsg);

//Error Handling in Callbacks
//Write a function executeWithErrorHandling that takes a callback function. Simulate an error and pass it to the callback to handle it gracefully.
function executeWithErrorHandling(callback){
    console.log('Oh No!! You have an Error, please handle it');
    callback();
}
function handleMsg(){
    console.log('Handling It');
}
executeWithErrorHandling(handleMsg);


//Validation
//Create a function validateInput that takes an input and a callback function. The callback should determine if the input is valid (e.g., checking if a string is not empty) and log the result.
function validateInput(str, callback){
    if(str.length>0){
        callback('The String is Not empty');
    }
    else{
        callback('The String is Empty, Please look in to it');
    }
}
function isValid(msg){
    console.log(msg);
}
validateInput('', isValid);