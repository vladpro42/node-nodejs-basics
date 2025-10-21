import fs from "fs/promises"
import path from "path"

const copy = async () => {
    const destPath = path.resolve('src', 'fs', 'files_copy');
    try {
        await fs.access(destPath)
        throw new Error('FS operation failed')
    } catch (err) {
        if (err.code === 'ENOENT') {
            fs.cp(path.resolve('src', 'fs', 'files'), destPath, { recursive: true })
        } else {
            throw err
        }
    }

};

await copy();
