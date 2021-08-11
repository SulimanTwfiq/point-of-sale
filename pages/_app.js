import "tailwindcss/tailwind.css"
import { makeServer } from "../mirage"
import { QueryClient, QueryClientProvider } from "react-query"
import Layout from "components/Layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const queryClient = new QueryClient()

// if (process.env.NODE_ENV === "development") {
// makeServer({ environment: "development" })
// }
makeServer() //

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default MyApp
