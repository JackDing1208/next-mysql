import {NextApiHandler} from "next"
import models from "./orm"


const User: NextApiHandler = (req, res) => {
  models.User.findAll({raw: true}).then((userList: Array<IUser>) => {
    res.status(200).send(userList)
  })
}


export default User

