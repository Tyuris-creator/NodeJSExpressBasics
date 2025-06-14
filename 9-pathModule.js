const path = require('path')


console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base) // base name name of a file in the end of the path

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)