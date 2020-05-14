// 5 Use string concatenation to print out a list of your hobbies in a sentence. This code should work even if you add more elements to the list. Eg. "My hobbies are painting, drawing and exercising", "My hobbies are painting, drawing, exercising and skydiving"
let me = {
    name: "Luke",
    age: 23,
};
me.hobbies = [
    "Skydiving",
    "Coding",
    "Eating",
    "Exercise"
];
let hobbies = "My hobbies are ";
for (let i = 0; i < me.hobbies.length; i++) {
    let hobby = me.hobbies[i];
    hobbies += hobby;
    if(i == me.hobbies.length - 2) {
        // For the second last element
        hobbies += " and ";
    } else if (i == me.hobbies.length - 1){
        // For the last element
        hobbies += ".";
    } else {
        // For all the other elements
        hobbies += ", ";
    }
}

console.log(hobbies);
// My hobbies are SkydivingCodingEatingExcersise
// My hobbies are Skydiving, Coding, Eating and Excersise