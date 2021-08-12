/*
PROMPT:
Write a function called ABCheck that takes a string parameter and returns true if the characters a and b are separated 
by exactly 3 places anywhere in the string at least once.

(ie. "lane borrowed" would result in true because there is exactly three characters between a and b).

Otherwise return false.

*/

// declare a fn called ABCheck

// IOCE
  //inputs: string
  //outputs: boolean
  //constraints:
  //edgecases: order of characters(a - b, b - a) & capital/lowercase [SEARCH FOR BOTH CASES]

  const ABCheck = (string) => {
    
    //convert string to all uppercase
    let upperCaseString = string.toUpperCase();
    //declare boolean
    let myBool = false;

    
    //for-loop through the uppercase string
    for(let i = 0; i < upperCaseString.length; i++){
    // check criteria is met
    if(upperCaseString[i] === 'A' && upperCaseString[i + 4] === 'B' ||  upperCaseString[i] === 'B' && upperCaseString[i + 4] === 'A') {
         myBool = true;
        }
    }   
    //return boolean
    return myBool;
    };
    
console.log(ABCheck('axx bxxxxxxx'));