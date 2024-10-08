/*For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */


/*let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
people.splice(1, 1);
people.splice(2, 1);
people.splice(1, 1);
people.unshift("Luis");
people.push("Gaby");
//console.log(people);
for (const name of people ){
    if( name === "Maria") 
        console.log("Maria is in the " + indexOf )
    break;
  }

  const indexOf = people.indexOf("Maria");*/


let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
people.splice(1, 1);
people.splice(2, 1);
people.splice(1, 1);
people.unshift("Luis");
people.push("Gaby");

for (let index = 0; index < people.length; index++) {
    const name = people[index];
    if (name === "Maria") {
        const indexOf = people.indexOf("Maria");
        console.log("Maria is in the index " + indexOf);
        break;
    }

}


