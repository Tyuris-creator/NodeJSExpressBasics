const { readFile, writeFile } = require("fs")
const util = require("util")

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const PATH = "./file.txt"

const start = async () => {
  try {
    const first = await readFilePromise(PATH, "utf-8")
    await writeFilePromise(PATH, "i was written through util", (err) => {
      if (err) {
        console.log(err)
      }
    })
    console.log(first)
  } catch (error) {
    console.log(error)
  }
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText(PATH).then(data=>console.log(data)).catch(err=>console.log(err))
