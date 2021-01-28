import { Component } from 'react';
import { Route } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import AboutPage from '../../routes/AboutPage/AboutPage'
import FAQPage from '../../routes/FAQPage/FAQPage'
import FindUnionPage from '../../routes/FindUnionPage/FindUnionPage'
import Header from '../Header/Header';
import './App.css';

export default class App extends Component {
  state = { hasError: false }

  static contextType = UserContext

  componentDidMount(){
    this.context.getIndustries()
    this.context.getUnionsByIndustry(1, 'Industry 1')
    this.context.getUnionsByIndustry(1, 'Industry 1', 'bun')
  }

  static getDerivedStateFromError(error){
    console.error(error)
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
      return (
        <div className="App">
          <Header/>
          <main>
            {hasError && (
              <p className='error'>There was an error! Oh no!</p>
            )}
            <Route
              exact
              path={'/'}
              component={AboutPage}
            />
            <Route
              path={'/unions'}
              component={FindUnionPage}
            />
            <Route
              path={'/questions'}
              component={FAQPage}
            />
          </main>
        </div>
    );
  }
}


