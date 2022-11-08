module.exports = (sequelize, type) => {
    return sequelize.define("User", {
        id: { type: type.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        name: { type: type.STRING, allowNull: false },
        email: { type: type.STRING, allowNull: false, unique: true },
        password: { type: type.STRING, allowNull: false },
        role: {
            type: type.ENUM,
            values: ['admin', 'manager', 'employee']
        }
    })
}

// User.hasOne(Profile);