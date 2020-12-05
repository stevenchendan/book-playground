//Bitwise operator
let num = -18
console.log(num.toString(2)); //-10010
console.log(num.toString());  //-18

//bitwise not  ~
let num1 = 25; //binary: 0000....11001
let num2 = ~num1; //binary: 1111...00110
console.log(num2);

//bitwise AND & 
let result = 25 & 3;
console.log(result); //1   binary equals to 1 only when both are 1

//bitwise OR
result = 25 | 3;
console.log(result); //if one side is 1 then result operator is 1

//bitwise XOR  return 1 only if one bit is 1
result = 25 ^ 3;
console.log(result)   //result is 26 because 11001 & 00011  -> 11010

//left shift <<
let oldValue = 2;
let newValue = oldValue << 5;  //add 5 zero to the end if 2
console.log(newValue);

//Signed right shift
oldValue = 64;
newValue = oldValue >> 5;
console.log(newValue); // 2

//unsigned right shift
oldValue = 64;
newValue = oldValue >>> 5;
console.log(newValue); //2

oldValue = -64;
newValue = oldValue >>> 5;
console.log(newValue); //134217726  because unsigned >>> ignore the sign and treated it like positive value






