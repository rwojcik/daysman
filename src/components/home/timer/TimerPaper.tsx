import React from 'react';
import { makeStyles, Paper, Theme } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(
  ({ spacing }: Theme) => ({
    paper: {
      marginTop: '10vh',
      marginBottom: '15vh',
      padding: spacing(1, 1),
      marginLeft: spacing(3),
      marginRight: spacing(3),
    },
  }),
  { name: 'TimerPaper' }
);

export type TimerPaperProps = {
  className?: string;
};

export const TimerPaper: React.FC<TimerPaperProps> = React.memo<TimerPaperProps>(function TimerPaper({
  className,
  ...otherProps
}) {
  const classes = useStyles();

  return <Paper square elevation={0} className={clsx(classes.paper, className)} {...otherProps} />;
});
