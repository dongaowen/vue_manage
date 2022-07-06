const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devtool: "cheap-module-source-map",
  devServer: {  //开启代理服务器
    proxy:{
          '/api1':{//匹配所有以'/api1'开头的请求路径
              target: 'http://localhost:3000',//代理目标的基础路径
              changeOrigin: true,			//是否撒谎，默认为true
              pathRewrite: {'^/api1': ''}
          },
          '/api2':{//匹配所有以'/api1'开头的请求路径
              target: 'http://localhost:3000',//代理目标的基础路径
              changeOrigin: true,
              pathRewrite: {'^/api2': ''}
          }
    }
    }
})
