import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import FindingFalcone from './components/FindingFalcone'
import ResultPage from './components/ResultPage'

//  import Planets from './components/Planets'
//  import Vehicle from './components/Vehicle'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FindingFalcone} />
          <Route exact path="/result" component={ResultPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
