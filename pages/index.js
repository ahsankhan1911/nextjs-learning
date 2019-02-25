import Head from 'next/head'
import Link from 'next/link'


function Home() {
    return <div>
  <Head>
      <title>Learning NextJs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <Link href={{pathname: '/about', query: {text: 'My About'}}}>
        <a>about</a>
      </Link>
        {/* <img src="/static/images/kfc popup3.jpg"/> */}
    </div>
  }
  
  export default Home