import Head from "next/head"

export default function App({Component, pageProps}) {
  return <>
    <Head>
      <title>全局title</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"/>
    </Head>
    <Component {...pageProps} />
    <style jsx global>{`
        *{
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        body{
          background: bisque;
        }
        .container{
          border:1px solid red;          
        }
        
      `}</style>


  </>
}
