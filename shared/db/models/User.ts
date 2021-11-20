import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';
import { makeModelOptions } from '../../helpers/makeModelOptions';

class User extends Model{
    public uuid: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
    public readonly deletedAt?: Date;
    
}
User.init({
    uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    firstName: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, makeModelOptions(sequelize, 'User'))

export default User;