async function solve(input) {
    const myPromise = new Promise((resolve, reject) => {
        if(input.status === 'ok') {
            resolve("Success");
        }   else {
            reject("Error");
        }

    })
    console.log(await myPromise);
    return myPromise;
}

async function fn() {
    console.log(await solve({"status": "ok"}))
}
fn()