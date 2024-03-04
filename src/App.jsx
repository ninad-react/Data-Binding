
import './App.css'
// import ParentComponent from './oneWayBinding/ParentComponent'
import StateDemo from './oneWayBinding/StateDemo'
import ParentComponent from './twoWayBinding/ParentComponent'

function App() {

  return (
    <>
      //one way data binding
      {/* <ParentComponent />
      <StateDemo /> */}

      //Two way data binding
      <ParentComponent />
    </>
  )
}

export default App
