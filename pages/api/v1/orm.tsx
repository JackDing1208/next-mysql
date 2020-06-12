import {Sequelize, Model, DataTypes} from "sequelize"

const sequelize = new Sequelize("test", "root", "123456", {
  host: "120.76.61.14",
  dialect: "mysql",
})

console.log("与mysql建立连接了")

class User extends Model {}

// 本地初始化表的实体
User.init({
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
}, {sequelize, modelName: "user"})

// 将创建的表同步到远程数据库
// sequelize.sync()

export default {User}
