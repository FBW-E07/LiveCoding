const Person = function() {}

const proto = Object.getPrototypeOf(Person)
Person.prototype.kick = function (type ) {
  console.log(type + " kick")
  return "Done"
}

const Jim = new Person()

// console.log("Person:", Person)
// console.log("proto:", proto)
console.log("Jim.kick('Penalty'):", Jim.kick('Penalty'))


const Chuck = function() {}
Chuck.prototype = new Person()
Chuck.prototype.kick = function() {
  Object.getPrototypeOf(this).kick("Roundhouse")
  return "Overwritten"
}

const Norris = new Chuck()

console.log("Norris.kick('High'):", Norris.kick('High'))

const Bruce = new Chuck()

console.log("Bruce.kick('High'):", Bruce.kick('0128374'))