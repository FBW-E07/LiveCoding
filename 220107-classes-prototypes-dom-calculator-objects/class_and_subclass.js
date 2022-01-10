/**
 * Demostration of a class and an extended class
 */


// The parent class provides basic properties and methods
class Character {
  constructor({name, summary}) {
    this.name = name
    this.summary = summary
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}. ${this.summarize()}`)
  }

  summarize() {
    return this.summary
  }
}

// An _instance_ is one object that is created from a class
const Storm = new Character({ name: "Storm", summary: "I control the weather."})
Storm.introduce()

// You can create severaly instances of a class, each with different
// properties, but all with the same methods.
const Cyclops = new Character({ name: "Cyclops", summary: "I can't control my own power."})
Cyclops.introduce()



// You can use a _subclass_ to _extend_ a parent class. A subclass
// can:
// * Have additional properties
// * Have additional methods
// * Overwrite existing methods
class FireCharacter extends Character {
  constructor(data) {
    // You must call super() in a subclass before you can use `this`
    super(data)
    this.fireType = data.fireType // additional property
  }

  // A subclass method with the same name as a parent class method
  // will be executed instead of the parent class method (overwrite).
  summarize() {
    // You can still call the parent method
    // by using `super.<methedName>`()
    return "Want to know more about me? " + super.summarize()
  }

  // Additional method
  useFire() {
    console.log(`My fire type is ${this.fireType}.`)
  }
}


// An instance of a subclass inherits the properties and methods of
// the parent class...
const DarkPhoenix = new FireCharacter({ name: "DarkPhoenix", summary: "See me be reborn.", fireType: "Soul"})

DarkPhoenix.introduce()

// ... and can also use its own properties and methods.
DarkPhoenix.useFire()



// You can check if an instance has a particular method or property
// before you attempt to use it
const useFire = (character) => {
  if (character.useFire) {
    character.useFire()
  } else {
    console.log(`I'm ${character.name}. I don't have a fire power.`)
  }
}

useFire(Storm)



// $ node class_and_subclass.js 
// Hi, I'm Storm. I control the weather.
// Hi, I'm Cyclops. I can't control my own power.
// Hi, I'm DarkPhoenix. Want to know more about me? See me be reborn.
// My fire type is Soul.
// I'm Storm. I don't have a fire power.