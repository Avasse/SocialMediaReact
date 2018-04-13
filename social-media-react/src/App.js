import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import { Menu, Segment } from 'semantic-ui-react'

import Home from './components/Home/Home';

class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Segment>
          My Segment
        </Segment>
        <Home></Home>
      </div>
    );
  }
}

export default App;
