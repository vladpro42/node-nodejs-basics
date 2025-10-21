import path from "path"
import zlib from "zlib"
import { pipeline } from "stream/promises";
import { createWriteStream, createReadStream } from "fs";


const decompress = async () => {
    const filename = path.resolve('src', 'zip', 'files', 'archive.gz')
    const source = createReadStream(filename)
    const guzip = zlib.createGunzip();
    const dest = createWriteStream(path.resolve('src', 'zip', 'files', 'fileToCompress.txt'))
    await pipeline(source, guzip, dest)
};

await decompress();