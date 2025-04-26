
import styles from'./App.module.css'
import { Navbar } from './nav'
import { Hero } from "./hero"
import{ About } from "./about"
import { Experience } from './exp'


function App() {
 

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
    </div>
  )
}

export default App
