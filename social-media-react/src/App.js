import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import { Menu, Grid} from 'semantic-ui-react'
import Invitations from './components/Invitations/Invitations';
import PostsList from './components/PostsList/PostsList';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const appStyle = {
  'height': '100vh'
};

const gridStyle = {
  'height': '100%'
}

class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Provider store={store}>
        <div className="app" style={appStyle}>
          <Menu pointing secondary className="app__menu">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item name='edit' active={activeItem === 'edit'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>

          <Grid style={gridStyle} columns={2} divided>
            <Grid.Row>
              <Grid.Column width={12}>
                <PostsList></PostsList>
              </Grid.Column>
              <Grid.Column width={4}>
                <Invitations></Invitations>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default (App);
