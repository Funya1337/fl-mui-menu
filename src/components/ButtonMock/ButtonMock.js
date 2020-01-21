import React from "react";
import Button from "@material-ui/core/Button";
import Type from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import cssVars from "../../constants/cssVars";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10
  }
}));

export default function ButtonMock(props) {
  const { text, onClick, isActive } = props;
  const classes = useStyles();
  const styles = isActive
    ? {
        backgroundColor: cssVars.darkBlue,
        color: cssVars.white
      }
    : {};
  return (
    <div className={classes.root}>
      <Button onClick={onClick} style={{ ...styles }}>
        {text}
      </Button>
    </div>
  );
}

ButtonMock.propTypes = {
  text: Type.string,
  onClick: Type.func,
  isActive: Type.bool
};
