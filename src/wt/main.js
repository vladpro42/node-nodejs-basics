import os from "os"
import { resolve } from "path";
import { Worker } from "worker_threads";
import path from "path"
import fs from "fs/promises"



const performCalculations = async () => {
    const cpuCorese = os.cpus().length;
    console.log(`amount of cpu cores equal: ${cpuCorese}`)

    const workerPromises = []
    const workers = []

    for (let index = 0; index < cpuCorese; index++) {
        const numberToSend = 10 + index;
        const workerPromise = new Promise((res, rej) => {
            const worker = new Worker(path.resolve('src', 'wt', 'worker.js'))
            workers.push(worker)
            worker.on('message', (result) => {
                if (result.success === 'success') {
                    res({ status: 'resolved', data: result.data, index, })
                } else {
                    resolve({ status: 'error', data: null, index, })
                }
                worker.terminate();
            })
            worker.on('error', err => {
                console.error(`error in worker ${index}: `, err)
                res({
                    status: 'error',
                    data: null,
                    index,
                })
                worker.terminate()
            })
            worker.on('exit', code => {
                if (code !== 0) {
                    console.log(`Worker ${index} finished with code ${code}`)
                }
            })
            worker.postMessage(numberToSend)
        })
        workerPromises.push(workerPromise)
    }
    try {
        const results = await Promise.all(workerPromises)
        console.log('workers results')
        console.log(results)
    } catch (error) {
        console.error('error with completed workers: ', error)
    }
};

await performCalculations();