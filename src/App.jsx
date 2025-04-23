
import styles from'./App.module.css'
import { Navbar } from './nav'
import { Hero } from "./hero"

function App() {
 

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
