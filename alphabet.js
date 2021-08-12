/* 
PROMPT:
write a functin that takes in a string, and returns that string with all its letters in alphabetal order. 
assume there will be no punctuation or numbers. 

example: `alphabet('hello')` // => 'ehllo'


INPUTS: string
OUTPUTS: string
CONSTRAINTS: none
EDGECASES: none

reference ASCII table to solve
*/

const alphabet = (string) => {

// split - turns a string to an array
// sort - sorts an array in ascending order based off UTF-16 codes
// join - turns an array to a string

return string.split('').sort().join('');

};


console.log(alphabet('dcba'));