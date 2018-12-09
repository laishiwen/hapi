// routers
// return {
//   method: "GET",
//   path: "/doc",
//   config: {
//     auth: false,
//     description: "用户查询",
//     notes: "登录模块",
//     tags: ["api"],
//     validate: {
//       query: {
//         id: Joi.required()
//           .description('用户Id')
//       }
//     },
//     id: "doc"
//   },
//   handler: controllers.user.login
// }
// controller
// login: (request, reply) => {
//   return models.user.findAll({
//     where: {
//       id: request.query.id
//     }
//   }).then((result) => {
//     return {
//       code: result ? 0 : -1,
//       message: result ? 'success' : 'fail',
//       data: result ? [123] : {}
//     }
//   });
// }