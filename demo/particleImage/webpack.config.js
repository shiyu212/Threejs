const { resolve } = require('path')

module.exports = () => {
    return {
        entry: './index.js',
        output: {
            path: resolve(__dirname, '/dist')
        }
    }
}