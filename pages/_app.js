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
    <>
      <div className="flex items-center justify-center h-screen blok lg:hidden">
        <h1 className="text-xl md:text-3xl text-tertiary-400">Small screens are not supported</h1>
      </div>

      <div className="hidden lg:block">
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default MyApp
