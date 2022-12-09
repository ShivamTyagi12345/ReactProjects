import React from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people , setPeople] = React.useState(data)

const helper =  () => {
  setPeople([])
}
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List people ={people}/>
        <button onClick={helper}> click </button>


      </section>
    </main>
  )
}

export default App
