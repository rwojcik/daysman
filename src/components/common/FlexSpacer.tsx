import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  {
    spacer: {
      flexGrow: 1,
    },
  },
  { name: 'FlexSpacer' }
);

export const FlexSpacer: React.FC = () => {
  const { spacer } = useStyles();

  return <div className={spacer} />;
};
