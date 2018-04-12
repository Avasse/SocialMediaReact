import React, { Component } from "react";
import Home from "./components/Home/Home";
import { Sidebar, Segment, Menu } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} direction='top' visible="true" inverted>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Home></Home>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default App;