async function sleep(duration) {
    let r;
    const p = new Promise(resolve => r = resolve);
    setTimeout(() => r(), duration);
    return p
}

export var time = {
    sleep
};
