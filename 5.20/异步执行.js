function read(callback) {
    setTimeout(function () {
        let result = "hello"
        callback(result)
    },2000)
}

read(function (result) {
    console.log(result)
});