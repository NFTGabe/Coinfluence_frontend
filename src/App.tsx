import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './views/HomePage'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
