// 相当于封装的HTML中的<head>
import Head from "next/head"
import avatar from "../assets/images/avatar.jpg"
import axios from "axios"
import {useEffect, useState} from "react"
import {NextPage} from "next"


const Home: NextPage = () => {
  const [userList, setList] = useState<Array<IUser>>([])

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
            <button>delete</button>
          </div>
        )
      })}

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
