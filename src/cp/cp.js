import { spawn } from "child_process"
import path from "path"

const spawnChildProcess = async (args) => {
    const scriptPath = path.resolve('src', 'cp', 'files', 'script.js');
    const childProcess = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    })

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);

    childProcess.stderr.on('data', data => console.error(`Child process stderr: ${data}`));
    childProcess.on('close', code => console.log(`Child process exited with code ${code}`))
    childProcess.on('error', error => console.error('Failed to start child process:', error))
    childProcess.on('message', (message) => console.log('Received message from child process:', message));

    return childProcess;
};

spawnChildProcess(['--var1', 'value1', '--var2', 'value2']);