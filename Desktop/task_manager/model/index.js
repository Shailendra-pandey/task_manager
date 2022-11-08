import dbConfig from '../config/db.Config';
import { Sequelize } from 'sequelize';

console.log(process.env.DB)

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operationsAliases: false,
    }
);

export default sequelize;