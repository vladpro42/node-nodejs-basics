
import fs from "fs/promises"
import path from "path"

const rename = async () => {
    const oldFileName = path.resolve('src', 'fs', 'files', 'wrongFilename.txt')
    const newFileName = path.resolve('src', 'fs', 'files', 'properFilename.md')
    try {
        await fs.access(oldFileName);

        try {
            await fs.access(newFileName);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }

        await fs.rename(oldFileName, newFileName)
        console.log('File renamed successfully');

    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err
    }
};

await rename();