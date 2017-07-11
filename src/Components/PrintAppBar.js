import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

class PrintAppBar extends React.Component {
  render () {
    return (
      <AppBar
        title={this.props.name}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default PrintAppBar;
