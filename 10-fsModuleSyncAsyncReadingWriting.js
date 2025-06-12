const { readFileSync, writeFileSync, readFile, writeFile } = require("fs")
const {
  first: firstPath,
  second: secondPath,
  dirname,
} = require("./content/paths")

console.log(dirname)
const first = readFileSync(firstPath, "utf-8")
const second = readFileSync(secondPath, "utf-8")

console.log(first, second)

writeFileSync(
  `${dirname}/result-sync.txt`,
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
) // different flags let us choose between rewriring or appending

readFile(firstPath, "utf-8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile(secondPath, "utf-8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      `${dirname}/result-async.txt`,
      `Here is the result : ${first}, ${second}`,
      (err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log("All async completed!")
      }
    )
  })
})

console.log("Sync reading complete!")
console.log("Starting async process...😘")
