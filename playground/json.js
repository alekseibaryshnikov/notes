const fs = require('fs');

const makeJson = (string) => {
    if (typeof string !== "object") {
        return new Error('The string should be an json string.');
    }
    fs.writeFileSync('notes.json', string);
}

const readJson = () => {
    return fs.readFileSync('notes.json');
}

const checkType = (entity) => {
    return typeof entity;
}

module.exports = {
    makeJson,
    readJson
}