import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Wonder from './Wonder'
import Header from './Header'
import Home from './Home'

class App extends React.Component {

  state = {
    wonders: []
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/wonders')
      .then(response => response.json())
      .then(wonders => this.setState({ wonders }))
  }

  wonderRoutes = () => {
    return this.state.wonders.map(w => <Route key={w.id} path={`/${w.id}`} render={() => <Wonder key={w.id} wonder={w} />} />)
  }

  handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === 2500) {
       return document.getElementById("header").style.inlineSize = "40px"
    }
    else {
      return document.getElementById("header").style.inlineSize = "80px"
    }
  }

  handleVotes = (clickedWonder) => {
    console.log(clickedWonder)
    const updatedWonder = this.state.wonders.find(wonder => clickedWonder.id === wonder.id)
    updatedWonder.votes += 1
    const notUpdated = this.state.wonders.filter(wonder => clickedWonder.id !== wonder.id)
    this.setState({wonders: [...notUpdated, updatedWonder]})
  }

  handleFlags = (event, id) => {
    let element = event.target 
    const flagClass = {
      1: 'china',
      2: 'brazil',
      3: 'peru',
      4: 'india', 
      5: 'jordan',
      6: 'mexico',
      7: 'italy'
    }
    element.className = flagClass[id]
  }

  handleLeaveFlags = (event) => {
    let element = event.target
    element.className = ""
  }
  
  render() {
    const sortedWonders = this.state.wonders.sort((a, b) => a.name < b.name ? -1 : 1)
    return (
      <div className="App">
        <Header className="header" wonders={sortedWonders} handleFlags={this.handleFlags} handleLeaveFlags={this.handleLeaveFlags} />
        <Switch>
          {this.wonderRoutes()}
          <Route exact path="/" render={() => <Home wonders={sortedWonders} handleVotes={this.handleVotes} />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
