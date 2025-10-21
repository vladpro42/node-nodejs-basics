
const parseArgs = () => {
    let result = '';

    const argv = process.argv.slice(2)
    for (let index = 0; index < argv.length; index += 2) {
        const propName = argv[index].replace('--', '')
        const value = argv[index + 1]
        if (result) result += ', '
        result += `${propName} is ${value}`
    }
    console.log(result)
};

parseArgs();