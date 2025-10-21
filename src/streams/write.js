import { createWriteStream } from "fs"
import path from "path"

const write = async () => {
    const fileName = path.resolve('src', 'streams', 'files', 'fileToWrite.txt')
    const writeStream = createWriteStream(fileName)
    process.stdin.pipe(writeStream)
};

await write();