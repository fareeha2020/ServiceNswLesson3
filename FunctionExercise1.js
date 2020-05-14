//5 Create a function that takes 1 argument that is an array of objects representing people. Each object should have a property name which should be a string and a property age which should be a number. The function should return the name of the oldest person.
let people = [
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Dana",
        age: 46
    },
    {
        name: "Jade",
        age: 19
    },
    {
        name: "Jim",
        age: 12
    }
];

function getOldest(array) {
    let oldestCurrent;
    for (let i = 0; i < array.length; i++) {
        let person = array[i];
        if (oldestCurrent) {
            if (person.age > oldestCurrent.age) {
                oldestCurrent = person;
            }
        } else {
            oldestCurrent = person;
        }
    }
    return oldestCurrent.name;
}

console.log(getOldest(people));