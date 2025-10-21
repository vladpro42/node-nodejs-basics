import path from "path"
import zlib from "zlib"
import { pipeline } from "stream/promises";
import { createWriteStream, createReadStream } from "fs";

const compress = async () => {
    try {
        const filename = path.resolve('src', 'zip', 'files', 'fileToCompress.txt')
        const source = createReadStream(filename)
        const gzip = zlib.createGzip();
        const dest = createWriteStream(path.resolve('src', 'zip', 'files', 'archive.gz'))
        await pipeline(source, gzip, dest)
    }
    catch (error) {
        console.log(error)
    }
};

await compress();