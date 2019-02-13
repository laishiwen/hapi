const GROUP_NAME = 'shops'

module.exports = (Joi) => {
  return [{
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, h) => {
      return '获取店铺列表'
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表'
    }
  }, {
    method: 'POST',
    path: `/${GROUP_NAME}/{shop_id}/goods`,
    handler: async (request, h) => {
      return '获取店铺的商品列表'
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
      validate: {
        params: {
          shop_id: Joi.string().required()
        },
        payload: {
          shops_list: Joi.array().items(Joi.object().keys({
            shops_id: Joi.number().integer(),
            count: Joi.number().integer()
          }))
        }
      }
    }
  }]
}