console.log('start')

setTimeout(() => {
    console.log('timeout')
}, 0);

Promise.resolve().then(() => {
    console.log('promise1')
}).then(() => {
    console.log('promise2')
})

console.log('end')

// start 
// end 
// promise1 
// promise2 
// timeout 