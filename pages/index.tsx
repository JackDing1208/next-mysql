// 相当于封装的HTML中的<head>
import Head from "next/head"
import avatar from "../assets/images/avatar.jpg"
import axios from "axios"
import {useEffect, useState} from "react"
import {NextPage} from "next"


const Home: NextPage = () => {
  const [userList, setList] = useState<Array<IUser>>([])
  const [username, setUsername] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const createUser = () => {
    axios.post("/api/v1/users", {name: username, age: age}).then((res) => {
      if (res.status === 200) {
        const item = res.data
        setList(list => [...list, item])
      }
    })
  }
  const deleteUser = (id: number) => {
    axios.delete("/api/v1/users", {data: {id: id}}).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
      }
    })
  }
  useEffect(() => {
    axios.get("/api/v1/users").then((res) => {
      if (res.status === 200) {
        setList(res.data)
      }
    })
  }, [])

  return (
    <div className="container">
      <Head>
        <title>首页名字</title>
      </Head>

      <h1>我是首页</h1>
      <img src={avatar} alt="" width={100} height={100}/>
      {userList.map((user) => {
        return (
          <div className="user" key={user.id.toString()}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <button onClick={() => {deleteUser(user.id)}}>delete</button>
          </div>
        )
      })}

      <div>
        <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        <input type="text" value={age} onChange={(e) => {setAge(e.target.value)}}/>
        <button onClick={createUser}>create</button>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .user{
          width:200px;
          display: flex;
          justify-content: space-around;
          border: 1px solid red;
        }
      `}</style>
    </div>
  )
}


export default Home
