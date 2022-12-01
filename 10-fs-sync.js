const { readFileSync,writeFilesync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second= readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`)
writeFileSync('./content/result-sync-2.txt',`Here is the result : ${first}, ${second}`)

console.log(first,second)