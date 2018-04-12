import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "../Home/Home";
import Stuff from "../../components/Stuff/Stuff";
import Contact from "../../components/Contact/Contact";

import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'


class Main extends Component {

  state = {
      navTop: true
    }

    toggleVisibility = () => this.setState({ navLeft: !this.state.navLeft })

    render() {
      const { navTop } = this.state

      return (
        <div>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} direction='top' visible="true" inverted>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Home></Home>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
  }

export default Main;