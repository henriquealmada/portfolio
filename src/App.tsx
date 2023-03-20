import Projects from './components/projects'
import Contact from './components/contact'
import About from './components/about'
import Home from './components/home'
import Layout from './components/layout'

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default App
