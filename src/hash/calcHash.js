import { createHash } from "node:crypto"
import path from "node:path";
import { createReadStream } from "node:fs";
import { pipeline } from "stream/promises";

const calculateHash = async () => {
    const fileName = path.resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt')
    try {
        const readStream = createReadStream(fileName)
        const hash = createHash('sha256')
        await pipeline(readStream, hash)
        const hexHash = hash.digest('hex')
        console.log(hexHash)
    } catch (error) {
        console.error('Error calculating hash or something else');
    }
};

await calculateHash();