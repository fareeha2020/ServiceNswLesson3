let me={name:"Tom",age:30};
console.log(me.name);
console.log(me.age);
me.age++;
console.log(me.age);
//add a propert for as an array of strings
me.hobby=["Sing","danc","music"];//if you use curley braces it becomes objects of Array

console.log(me);
//add a property array with 3 properties,so now it becomes object means with many variables
me.pets=[
    {name:"tom",age:6,species:"dog"},
    {name:"tcmmy",age:60,species:"doggy"},
    {name:"lis",age:600,species:"dcatg"},
]
console.log(me);


//print pets neatly
for (let j = 0; j < me.pets.length; j++) {
  let pet=me.pets[j];
   console.log(`My ${pet.species}`);
}

