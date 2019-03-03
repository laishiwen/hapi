const { paginationDefine } = require("../utils/validate-helper");

const GROUP_NAME = "shops";

module.exports = ({ shops, goods }, validateHelper) => {
  return [
    {
      method: "GET",
      path: `/${GROUP_NAME}`,
      handler: async (request, h) => {
        const { limit, page } = request.query;

        const {
          rows: results,
          count: totalCount
        } = await shops.findAndCountAll({
          attributes: ["id", "name"],
          limit,
          offset: (page - 1) * limit
        });

        return {
          results,
          totalCount
        };
      },
      config: {
        tags: ["api", GROUP_NAME],
        description: "获取店铺列表"
        // validate: {
        //   ...paginationDefine
        // }
      }
    },
    {
      method: "POST",
      path: `/${GROUP_NAME}/{shop_id}/goods`,
      handler: async (request, h) => {
        const {
          query: { limit, page },
          params: { shop_id }
        } = request;
        const {
          rows: results,
          count: totalCount
        } = await goods.findAndCountAll({
          where: {
            shop_id
          },
          attributes: ["id", "name"],
          limit,
          offset: (page - 1) * limit
        });

        return {
          results,
          totalCount
        };
      },
      config: {
        tags: ["api", GROUP_NAME],
        description: "获取店铺的商品列表"
        // validate: {
        //   params: {
        //     shop_id: Joi.string()
        //       .required()
        //       .description("店铺的id")
        //   },
        //   ...paginationDefine
        // }
      }
    }
  ];
};
