import "tailwindcss/tailwind.css"
import { makeServer } from "../mirage"
import { QueryClient, QueryClientProvider } from "react-query"
import Layout from "components/Layout"

const queryClient = new QueryClient()

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
