import { parentPort } from "worker_threads";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    parentPort.postMessage(result);
};

parentPort.on('message', (data) => {
    try {
        console.log(`Worker received data: ${data}`);
        const result = nthFibonacci(data);

        sendResult({
            success: 'success',
            data: result
        });
    } catch (err) {
        sendResult({
            success: 'error',
            data: null,
            error: err.message
        });
    }
});