class Person {
  constructor (firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }

  introduce () {
      console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }
  
  static introducePeople (people) {
      if (!(Array.isArray(people))) {
          throw new Error(`introducePeople only takes an array as an argument.`)
      }

      for (let i = 0; i < people.length; i++) {
        let person = people[i];
        
        if(!(person instanceof Person)) {
              throw new Error(`All items in array must be Person class instances.`)
          }
      }

      return people.forEach((person) => person.introduce())
  }
}

// const Jane = new Person(
//     'Jane',
//     'Smith',
//     '35',
// );

// Jane.introduce()

// const James = new Person(
//   `James`,
//   `Thompson`,
//   `15`,
// )

// James.introduce()

// let arr = [James, Jane]

// let tester = Person.introducePeople(arr);

// return tester
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}