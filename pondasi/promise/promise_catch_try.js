/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



//Cara 1 rethrow
function getUserById(id) {
    if (typeof id !== 'number' || id <= 0) {
        throw new Error('Invalid id argument'); //instance throw
    }

    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            role: 'admin'
        });
    });
}

/*
 * 
    getUserById(34).then(
        user => console.log(user)
    ).catch(err => console.log(err));
 * 
 */
    
    
try {
    getUserById(5).then(user => console.log(user)).catch(err => console.log(`Caught by .catch ${err}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}