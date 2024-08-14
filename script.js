const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
];

function findTheOldest(people){
    let oldest = people[0];
    people.forEach(person => {
        if(person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {oldest = person;}
    });
    console.log(oldest);
    return oldest;
}

findTheOldest(people);
