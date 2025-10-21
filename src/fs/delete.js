
import fs from "fs/promises"
import path from "path"

const remove = async () => {
    const filename = path.resolve('src', 'fs', 'files', 'fileToRemove.txt')
    try {
        await fs.access(filename)
        await fs.unlink(filename)
        console.log('File was deleted succesfully')
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await remove();