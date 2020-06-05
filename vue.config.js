module.exports = {
    publicPath:'',
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/mock':{
                target:'http://loaclhost:8080',
                ws:false,
                changeOrigin:false
            }
        }
    }
}