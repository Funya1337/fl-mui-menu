import React from "react";
import Button from "@material-ui/core/Button";
import Type from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import cssVars from "../../constants/cssVars";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function ButtonMock(props) {
  const { text, onClick } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={onClick}>{text}</Button>
    </div>
  );
}

ButtonMock.propTypes = {
  text: Type.string,
  onClick: Type.func
};
