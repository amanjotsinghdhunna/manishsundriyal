import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Typography paragraph>
          Add Main content here
        </Typography>
        <Typography paragraph>
          Add Sub Main content here
        </Typography>
      </React.Fragment>
    );
  }
}
export default HomePage;
