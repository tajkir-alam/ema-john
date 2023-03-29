import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Shop />
      </div>
    </div>
  )
}

export default App
