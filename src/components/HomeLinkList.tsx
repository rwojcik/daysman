import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  {
    root: {
      margin: '5vh 0',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  { name: 'HomeLinkList' }
);
export const HomeLinkList: React.FC = React.memo(function HomeLinkList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center">HomeLinkList</Typography>
    </div>
  );
});
