
import styles from'./App.module.css'
import { Navbar } from './nav'
import { Hero } from "./hero"
import{ About } from "./about"

function App() {
 

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About/>
    </div>
  )
}

export default App
