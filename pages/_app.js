import "tailwindcss/tailwind.css"
import { makeServer } from "../mirage"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
