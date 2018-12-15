const initDb = async(models) => {
    let sequelize = await models.sequelize;

    sequelize.sync({
        force: false
    }).then(function(res) {
        console.log("connection database successed")
    }).catch(function(err) {
        console.log("connection failed due to error: %s", err)
    })
}

module.exports = {
    initDb: initDb
}