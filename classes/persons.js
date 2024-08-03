class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce () {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
    }
    
    static introducePeople (...People) {
        if (!(Array.isArray(...People))) {
            console.log(`introducePeople only takes an array as an argument.`)
        }

        for (let person in People) {
            if(person instanceof Person === false) {
                console.log(`All items in array must be Person class instances`)
            }
        }
        
    }
}

// const Jane = new Person(
//     'Jane',
//     'Smith',
//     '35',
// );

// Jane.introduce()

// module.exports = {
//     Person
// }