module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        let path = require('path');
        config.module
            .rule('eslint')
            .exclude.add(path.resolve('dist'))
            .end()
            .exclude.add(path.resolve('examples/docs'))
            .end();
        config.module
            .rule('js')
            .include.add('/examples/')
            .end()
            .include.add('/src/')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
};
