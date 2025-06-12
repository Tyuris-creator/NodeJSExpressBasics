const { createReadStream } = require("fs")

const stream = createReadStream("../file.txt", { highWaterMark: 90000 })

// default 64kb
// last buffer - remainder
// highWaterMark - controlSize
// const stream - createReadStream(PATH, {highWaterMark: number, encoding: 'utf8})

stream.on("data", (result) => {
  console.log(result)
})

stream.on("error", (error) => console.log(error))
