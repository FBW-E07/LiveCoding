// Every Class is an Object in JavaScript
// A Class is what we can call "syntatic sugar". In other words:
// nicer syntax that, under the hood' equates to something that
// you could also write without the "sugar".
//
// JavaScript is a language based on prototypes. JavaScript
// "classes" allow developers who are used to classes in other
// language to write in a familiar way. But under the hood, it's
// prototypes all the way down.

class Profile {
  constructor(fName, LName, age, location){
      this.fName = fName
      this.LName = LName
      this.age = age
      this.location = location
  }

  // getMessage is a "method" of the Profile class.
  // It looks like a function, but it must not be preceded by the
  // word function (Syntax Error)
  // 
  // The methods and properties of a class are collectively
  // known as the class's "members"
  getMessage(){
    return`Hi! I'm ${this.fName}. I'm from ${this.location}`
  }

  getSpecialProperty() {
    return this.speciality // will be undefined in Profile instances
  }

  // A static method cannot be called on an instance of the class.
  // You can call it using `Profile.showStructure()`
  // It has no access to `this` — because `this` is an instance thing
  static showStructure(){
    return `the structure is amazing`
  }
}

// You can use 
class Student extends Profile {
  constructor(speciality, ...rest){
    // The `rest operator` (above) gathers up all arguments in
    // an array that are not individually named.
    console.log("rest:", rest)
    // The `spread operator` (below), which looks exactly the 
    // same takes an array and "spreads" it out as individual
    // arguments. This allows you to ensure that all arguments
    // of the Student constructor are sent to the Profile
    // constructor.
    super(...rest) // calls the constructor of the parent(profile)
      //console.log(this)

    this.speciality = speciality
  }

  // getMessage in the Student instance "overwrites" the method
  // that is inherited from the Profile "parent".
  getMessage(){
    // You can call the (otherwise overwritten) getMessage method
    // in the parent class, by prefixing it with "super."
    const initMessage = super.getMessage()

    return`${initMessage} and excited about learning 
    ${this.speciality}`
  }
}


const profile1 = new Profile('Ashley', 'Jiang', 31, 'Leipzig')
const student2 = new Student('Web Dev', 'Ivo', 'Serra', 41, 'Berlin')

console.log("Profile1 getMessage", profile1.getMessage())
console.log("Student2 getMessage", student2.getMessage())

console.log("Profile1 getSpecialProperty", profile1.getSpecialProperty())
// This will be undefined because the Profile class has
// no `speciality` property

console.log("Student2 getSpecialProperty", student2.getSpecialProperty())
// The getSpecialProperty method is in the Profile class, but it
// has access to the `this.speciality` property in extended
// Student class. The `this` the instance of the Student class
// which inherits the getSpecialProperty method

// Call to static method of Class
console.log(Profile.showStructure()) 



// Object.keys is a static method of the object prototype