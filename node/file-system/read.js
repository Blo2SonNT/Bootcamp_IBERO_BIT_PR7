const fs = require('fs');

fs.readFile('./logs.txt', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
})