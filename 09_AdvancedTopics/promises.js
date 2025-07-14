// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB (Database) calls, cryptography, network call
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function() {   // directly connected with resolve.
//     console.log("Promise consumed");
// })


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})


