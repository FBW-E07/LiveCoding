// Every Class is an Object in JavaScript
//
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
// This works! It prints "Web Dev".
//
// How does a method in the Profile class return the value of a
// property in the extended Student class?
//
// The Profile class has no `this.speciality` property
// The Student class has no `getSpecialProperty` method of its own...
// ... but it gets access to methods of the class that it extends
//
// The `this` variable is a *pointer* to the instance of
// the Student class. A pointer is like a house address, but for the
// Random Access Memory (RAM) of your computer. A pointer tells 
// JavaScript where to find the details of the instance.
//
// At the RAM location defined by 'this`, both `this.speciality` and
// a pointer to where the Profile class is stored in RAM. When you call
// `this.getSpecialProperty`on the Student instance, the JavaScript
// engine searches for a method with this name at the `this` location
// in the RAM. But it doosn't find it there.
//
// What it does find is a pointer to the Profile class, so it looks
// there too, but it takes the value of `this` with it, so that it can
// run the Profile getSpecialProperty method using the data stored at
// `this` location.
//
// The Profile could itself have been extended, and so the JavaScript
// engine could climb up the family tree until it found the method
// it is looking for.
//
// You can think of this as going to ask your mum or dad for help (and
// they could ask a grand-parent).

// Call to static method of Class
console.log(Profile.showStructure()) 



// Methods like Object.keys(), Array.from(), Math.max() are static 
// methods, called on the "class" itself. You cannot call them on an 
// instance of an Object, an Array or Math. Indeed, all methods of Math
// are static. You cannot create a `new Math()` instance.

// Methods like "string".toLowerCase(), [].pop(), {}.toString() are NOT
// static. They are available on all instance of their particular 
// "class"