const Inert = require('inert')
const Vision = require('vision');
const Packages = require('package');
const HapiSwagger = require('hapi-swagger');

module.exports = [
  Inert,
  Vision, {
    plugin: HapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: Packages.version,
        description: '基于 hapi',
        contact: {
          name: 'laishiwen',
          url: 'https://github.com/laishiwen',
          email: '467158536@qq.com',
        },
        license: {
          name: 'MIT',
          url: 'https://github.com/laishiwen',
        },
      },
      lang: 'zh-cn',
      grouping: 'tags',
      tags: [{
        name: 'tests',
        description: '测试相关'
      }, ],
    }
  }
]