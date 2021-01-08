// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    devServer: {
      proxy: {
        '/api/**': {
           target: 'https://c083b4900e2a.ngrok.io',
           pathRewrite: { '^/api': '' },
           secure: false,
           logLevel: 'debug'
        }
     }
    },
  }