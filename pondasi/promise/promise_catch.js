let count = ['Kleff','route'];
//count.length === 0 ? console.log('ya') : console.log('tidak');

let countValue = new Promise(function (resolve, reject) {
    if (count.length !== 0) {
        resolve(
            [
                {
                    username: 'john', 
                    email: 'john@test.com'
                },
                {
                    username: 'jane', 
                    email: 'jane@test.com'
                }
            ]
        );
    } else {
        reject(console.log(count.length));
    }
});

countValue.then(function successValue(result) {
    console.log(result);
}).catch(
    function errorValue(result) {
        console.log(result);
    }
);
 