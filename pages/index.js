import Head from "next/head"
import HomePage from "components/HomePage/index.js"
export default function Home() {
  return (
    <div>
      <Head>
        <title>POS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  )
}
