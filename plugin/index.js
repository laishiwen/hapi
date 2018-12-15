const swaggerOptions = {
    info: {
        title: "文档",
        version: "1.0.0",
        description: "基于 hapi 框架的系统后台",
        termsOfService: "http://swagger.io/",
        contact: {
            name: "Jack Wen",
            url: "https://github.com/laishiwen",
            email: "467158536@qq.com"
        },
        license: {
            name: "MIT",
            url: "https://github.com/hapijs/hapi/blob/master/LICENSE"
        },
    },
    lang: "zh-cn",
    basePath: "/",
    grouping: "tags",
    tags: [{
        name: "tests",
        description: "测试相关"
    }],
    // host: "petstore.swagger.io",
    // schemes: [
    //   "https",
    //   "http"
    // ],
    externalDocs: {
        description: "Find out more about Swagger",
        url: "http://swagger.io"
    }
}

module.exports = [{
        plugin: require("inert")
    },
    {
        plugin: require("vision")
    },
    {
        plugin: require('hapi-pagination')
    },
    {
        plugin: require("hapi-auth-jwt2")
    },
    {
        plugin: require('hapi-redis')
    },
    {
        plugin: require("hapi-swagger"),
        options: swaggerOptions
    },
    {
        plugin: require("hapi-good")
    }
]