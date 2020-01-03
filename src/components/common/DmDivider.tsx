import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Mustache from '../../assets/mustache-vector.svg';
import clsx from 'clsx';

const useStyles = makeStyles(
  ({ spacing, palette }: Theme) => ({
    vertical: {},
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      height: '100%',
      padding: spacing(0, 4),
      '$vertical&, $vertical &': {
        flexDirection: 'column',
        padding: spacing(2, 0),
      },
    },
    line: {
      borderTop: `solid 1px ${palette.primary.light}`,
      flexGrow: 1,
      '$vertical&, $vertical &': {
        borderTop: 'none',
        borderLeft: `solid 1px ${palette.primary.light}`,
      },
    },
    icon: {
      margin: spacing(0, 2),
      position: 'relative',
      top: 2,
      '$vertical&, $vertical &': {
        margin: spacing(2, 0),
      },
      '& path': {
        fill: 'currentColor',
      },
    },
  }),
  { name: 'DmDivider' }
);

export type DmDividerProps = {
  vertical?: boolean;
};

export const DmDivider: React.FC<DmDividerProps> = ({ vertical = false }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, { [classes.vertical]: vertical })}>
      <div className={classes.line} />
      <div className={classes.icon}>
        <Mustache />
      </div>
      <div className={classes.line} />
    </div>
  );
};
