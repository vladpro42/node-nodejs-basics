
import fs from "fs/promises"
import path from "path"

const list = async () => {
    const dir = path.resolve('src', 'fs', 'files')
    try {
        const res = await fs.readdir(dir)
        console.log(res)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await list();