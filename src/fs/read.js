
import fs from "fs/promises"
import path from "path"

const read = async () => {
    const filename = path.resolve('src', 'fs', 'files', 'fileToRead.txt')
    try {
        await fs.access(filename)
        const data = await fs.readFile(filename, 'utf-8')
        console.log(data)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await read();