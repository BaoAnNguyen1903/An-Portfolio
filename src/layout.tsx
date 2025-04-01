import { Outlet } from "react-router-dom"
import Header from "./components/layout/app.footer"
import Footer from "./components/layout/app.header"


function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
