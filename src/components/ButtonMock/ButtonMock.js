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
  const {
    text,
    onClick,
    isActive,
    isTextStylesActive,
    bottomButtonStyleMockActive,
    bottomButtonStyleMockOtherActive,
    fullScreenButtonActive,
    style,
    rootStyle
  } = props;
  const classes = useStyles();
  const styles = isActive
    ? {
        backgroundColor: cssVars.darkBlue,
        color: cssVars.white
      }
    : {};
  const textStyles = isTextStylesActive
    ? {
        textTransform: "none"
      }
    : {};
  const bottomButtonStyleMock = bottomButtonStyleMockActive
    ? {
        backgroundColor: cssVars.lightBlue,
        color: cssVars.black
      }
    : {};
  const bottomButtonStyleMockOther = bottomButtonStyleMockOtherActive
    ? {
        backgroundColor: cssVars.lighterBlue,
        color: cssVars.white
      }
    : {};
  const fullScreenButton = fullScreenButtonActive
    ? {
        width: "100%"
      }
    : {};
  return (
    <div className={classes.root} style={rootStyle}>
      <Button
        onClick={onClick}
        style={{
          ...styles,
          ...textStyles,
          ...bottomButtonStyleMock,
          ...bottomButtonStyleMockOther,
          ...fullScreenButton,
          ...style
        }}
      >
        {text}
      </Button>
    </div>
  );
}

ButtonMock.propTypes = {
  text: Type.string,
  onClick: Type.func,
  isActive: Type.bool,
  isTextStylesActive: Type.bool,
  bottomButtonStyleMockActive: Type.bool,
  fullScreenButtonActive: Type.bool,
  style: Type.object,
  rootStyle: Type.object
};
