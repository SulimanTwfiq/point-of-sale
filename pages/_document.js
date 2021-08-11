import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-screen overflow-hidden text-white bg-primary-1100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
