import { Inter } from "@next/font/google";
import Alert from '../components/alert'
// import Footer from '../components/footer'
import Meta from '../components/meta'
import Navbar from '../components/navbar'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className={`${inter.variable} font-sans`}>
        <Alert preview={preview} />
        <header className="contents">
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}
