// 相当于封装的HTML中的<head>
import Head from "next/head"
import avatar from "../assets/images/avatar.jpg"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>首页名字</title>
      </Head>

      <h1>我是首页</h1>
      <img src={avatar} alt=""/>
      <button>点我跳转</button>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>


    </div>
  )
}
