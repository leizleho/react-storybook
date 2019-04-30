import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

function CustomButton(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;

  return (
    <>
      <Button {...rest} className={classes.button}>
        {children}
      </Button>
    </>
  );
}

export default CustomButton;
