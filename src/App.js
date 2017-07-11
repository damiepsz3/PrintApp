import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PrintAppBar from './Components/PrintAppBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <PrintAppBar
          name="Print App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
    </MuiThemeProvider>
  );
}
}

export default App;
