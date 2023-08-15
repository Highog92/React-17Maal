import './App.css'
import { Header } from './Components/Header/Header'
import { NavBar } from './Components/Navigation/Navbar'
import { TheGoals } from './Components/The 17 goal/The_17_goals'
import { Commitments } from './Components/The Commitments/Commitments'
import { SubGoals } from './Components/Sub-Goals/Sub_Goals'
function App() {


  return (
    <>
      <Header />
      <NavBar />
      <TheGoals />
      <Commitments />
      <SubGoals/>
    </>
  )
}

export default App
