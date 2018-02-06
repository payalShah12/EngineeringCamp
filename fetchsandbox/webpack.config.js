var path = require("path");
module.exports = {
    entry : './entry.js',
    output: {
       path : path.resolve(__dirname,"dest"),
        filename : 'bundle.js'
    }
}