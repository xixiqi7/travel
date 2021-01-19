module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}