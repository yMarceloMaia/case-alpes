import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  const [isOpenHeader, setIsOpenHeader] = useState(false)

  return (
    <>
      <Header isOpenHeader={isOpenHeader} setIsOpenHeader={setIsOpenHeader} />
      <Home isOpenHeader={isOpenHeader} setIsOpenHeader={setIsOpenHeader} />
      <Footer isOpenHeader={isOpenHeader}/>
    </>
  )
}

export default App
