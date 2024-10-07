import BlurBackground from "./components/BlurBackground"
import Contacts from "./components/Contacts"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"


function App() {


  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Home />
        <Projects />
        <Contacts />
      </main>
    </>
  )
}

export default App
