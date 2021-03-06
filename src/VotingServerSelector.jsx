/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  Input,
  Paper,
  Button,
  withStyles,
  Typography,
  FormControl,
  FormHelperText
} from "material-ui";
import database from "./database.js";

const styles = {
  formContainer: {
    padding: "2rem"
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexFlow: "column"
  },
  button: {
    display: "block",
    marginTop: "10px"
  }
};

class VotingServerSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pollId: "",
      errorMsg: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    //store pollId value in the local state. Google react + setState.
    // Also hide the error if there was one.
  }

  handleSubmit(event) {
    event.preventDefault();

    // At which path to look in the database
    let ref = "/polls/" + this.state.pollId;

    //Hide possible previous error.
    //here

    // Check the database.
    database.ref(ref).once("value", snap => {
      if (snap.val() != null) {
        // snap (which contain our poll result exists. Let's navigate to our poll.)
        // code here.
      } else {
        // There isn't a poll with this id. Show an error message
        // code here.
      }
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contentContainer}>
        <Paper className={classes.formContainer}>
          <Typography variant="headline" gutterBottom="true">
            Enter your poll number
          </Typography>
          <form onSubmit={this.handleSubmit}>Code here!</form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(VotingServerSelector);
