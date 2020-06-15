import {NextApiHandler} from "next"
import models from "./orm"


const User: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    models.User.findAll({raw: true}).then((userList: Array<IUser>) => {
      res.status(200).send(userList)
    })
  } else if (req.method === "POST") {
    models.User.create(req.body).then((xxx: IUser) => {
      res.status(200).send(xxx)
    })
  } else if (req.method === "DELETE") {
    models.User.destroy({
      where: {
        id: req.body.id
      }
    }).then((xxx: IUser) => {
      res.status(200).send(xxx)
    })
  }

}


export default User

