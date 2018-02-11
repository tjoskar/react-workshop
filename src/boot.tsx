import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Search } from './components/search/search'
import { UpcomingShows } from './components/shows/upcoming-shows'
import { configureStore } from './store/store'

const store = configureStore()

const App = () => (
  <Router>
    <Provider store={store}>
      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
        </ul>
        <Route exact={true} path="/" component={UpcomingShows} />
        <Route exact={true} path="/search" component={Search} />
      </div>
    </Provider>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
