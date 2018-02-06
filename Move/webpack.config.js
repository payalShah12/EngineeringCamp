var path = require("path");
module.exports = {
    entry : './move.js',
    output: {
       path : path.resolve(__dirname,"./pic"),
        filename : 'bundle.js'
    }
}