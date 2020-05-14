//defines function
function addNumbers(num1,num2)
{
    return num1+num2;
}
//using the fuction in program
let myAnswer=addNumbers(12,19);
console.log(myAnswer);

//function 2 arguments numbers,return largest
function getMaxNumber(num1,num2){
if(num1>num2)
{
    return num1;//return here code stops executing so no need to use else
}
    return num2;
}
//console.log(getMaxNumber(12,19));
let bigNum=getMaxNumber(9,10);
console.log(bigNum);
//take one argument as an array and print each elementof arry
function myArrayPrinter(myArray){
    for(let i=0;i<myArray.length;i++){
        let myItem=myArray[i];
        console.log(myItem);
    }
}
let name=[
    "jim",
    "bob",
    "luke"
];
myArrayPrinter(name);
myArrayPrinter("hello");//can be used on string as well

//Create a function that takes 2 arguments, 
//name and age, and returns an object with properties name and age set to the values passe in
function createPerson(name,age){
    return {
        name: name,
        age:age
    }
}
let fareeha=createPerson("fareeha",23);
console.log(fareeha);