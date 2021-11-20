import { Options, Sequelize } from 'sequelize';


const options: Options = {
    database: process.env.DATABASE_NAME,
    dialect: "mysql",
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
}

export const sequelize = new Sequelize(options)


