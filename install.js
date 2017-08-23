const fs = require('fs');
const exec = require('child_process').exec;
const cwd = require('path').resolve();

const file = 'flexboxgrid/dist/flexboxgrid.css';

// check if the flexboxgrid node module is nested in the current module
if(fs.existsSync(cwd + '/node_modules/' + file)) {
    toStylus(cwd + '/node_modules/' + file)
}
// or is it installed in the root node_modules folder
else if(fs.existsSync(cwd + '/../' + file)) {
    toStylus(cwd + '/../' + file);
}
else {
    console.error('Could not find file '+file);
}

function toStylus(file) {
    exec('stylus ' + file + ' ./flexboxgrid.styl --css');
}
