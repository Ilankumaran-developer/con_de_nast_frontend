
import React, { Component } from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";


import Footer from "./Footer/Footer.js";
import Sidebar from "./Sidebar/Sidebar.js";


import routes from "../routes.js";

var ps;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        backgroundColor: "black",
        activeColor: "info",
      };
      this.mainPanel = React.createRef();
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    return (
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            activeColor={this.state.activeColor}
          />
          <div className="main-panel" ref={this.mainPanel}>
   
            <Switch>
              {routes.map((prop, key) => {
                return ( 
                  <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              
              })}
            </Switch>
            <Footer fluid />
          </div>
        </div>
      );
  }
}


export default App