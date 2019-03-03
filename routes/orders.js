const GROUP_NAME = "orders";

module.exports = (model, validateHelper) => [
  {
    method: "GET",
    path: `/${GROUP_NAME}`,
    handler: async (request, h) => {
      return "创建订单";
    },
    config: {
      tags: ["api", GROUP_NAME],
      description: "创建订单"
      //   validate: {
      //     query: {
      //       limt: Joi.number()
      //         .integer()
      //         .min(1)
      //         .default(10)
      //         .description("每页的总条数"),
      //       page: Joi.number()
      //         .integer()
      //         .min(1)
      //         .default(10)
      //         .description("页码")
      //     },
      //     headers: Joi.object({
      //       authorization: Joi.string().required()
      //     }).unknown()
      //   }
    }
  },
  {
    method: "POST",
    path: `/${GROUP_NAME}/{order_id}/pay`,
    handler: async (request, h) => {
      return `支付某条订单${request.params.order_id}`;
    },
    config: {
      tags: ["api", GROUP_NAME],
      description: "支付某条订单"
      //   validate: {
      //     params: {
      //       order_id: Joi.string().required()
      //     }
      //   }
    }
  }
];
