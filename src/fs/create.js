import fs from "fs/promises"
import path from "path"

const create = async () => {
    const fileName = path.resolve('src', 'fs', 'fresh.txt');
    const fileContext = 'I am fresh and young';

    try {
        await fs.access(fileName)
        throw new Error('FS operation failed')

    } catch (error) {
        if (error.code === 'ENOENT') {
            fs.writeFile(fileName, fileContext)
            console.log('File created successfully');
        } else throw error
    }

};

await create();