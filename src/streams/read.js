import { createReadStream } from "node:fs";
import path from "node:path";

const read = async () => {
    const fileName = path.resolve('src', 'streams', 'files', 'fileToRead.txt')
    const readStream = createReadStream(fileName)
    readStream.pipe(process.stdout)
};

await read();