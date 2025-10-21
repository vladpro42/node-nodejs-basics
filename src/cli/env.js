const parseEnv = () => {
    const envs = process.env
    // envs['RSS_var1'] = 'val1'
    // envs['RSS_var2'] = 'val2'
    const PREFIX = 'RSS_'
    let str = '';

    for (const [key, value] of Object.entries(envs)) {
        if (key.startsWith(PREFIX)) {
            str += key.toString() + '=' + value.toString() + '; '
        }
    }

    console.log(str)
};

parseEnv();