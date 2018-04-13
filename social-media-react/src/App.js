import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import { Menu, Segment, Grid} from 'semantic-ui-react'
import Invitations from './components/Invitations/Invitations';

class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="app">
        <Menu pointing secondary className="app__menu">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Invitations></Invitations>
            </Grid.Column>
            <Grid.Column>
              <Invitations></Invitations>
            </Grid.Column>
            <Grid.Column>
              <Invitations></Invitations>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
