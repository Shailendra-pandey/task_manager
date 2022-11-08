module.exports = (sequelize, type) => {
    return sequelize.define("Profile", {
        id: {type: type.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        name:{type: type.STRING, allowNull: false},
    })
}
