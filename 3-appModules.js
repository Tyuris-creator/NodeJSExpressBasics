// Modules = Encapsulated Code (only share minimum)
// Common.js = every file is a module (by default)
const names = require("./4-names") // we can destructure as well for example {john,peter}
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")
console.log(data.items[0], data.singlePerson.name)

const { items, singlePerson } = require("./6-alternative-flavor")
console.log(items[0], items[1])
console.log(singlePerson.name)

const { name: n = "Misha" } = singlePerson
console.log(n)

require("./7-mine-grenade")
console.log(require("./4-names"))

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)
