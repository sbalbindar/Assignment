'use strict';

const fs = require('fs');

fs.readFile('input.json', (err, data) => {
    if (err) throw err;
    let inp = JSON.parse(data);
    console.log(inp);
    var json = inp;

    json.name = "Wipro Ltd";

    let data1 = JSON.stringify(inp);
    fs.writeFileSync('output.json', data1);
});