import { Transform } from "stream";

const transform = async () => {
    const reverseTextStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback()
        }
    })
    process.stdin.pipe(reverseTextStream).pipe(process.stdout)
};

await transform();