import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, makeStyles } from '@material-ui/core';
import { DmButtonLink } from './common/DmButtonLink';
import { FlexSpacer } from './common/FlexSpacer';

const links = [
  { name: 'Timer', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Companies', href: '/companies' },
  { name: 'User', href: '/user' },
  { name: 'Reports', href: '/reports' },
];

const useStyles = makeStyles(
  {
    nav: {
      textAlign: 'center',
    },
    ul: {
      display: 'flex',
    },
    '$nav > $ul': {
      padding: '4px 16px',
    },
    li: {
      display: 'flex',
      padding: '6px 8px',
    },
  },
  { name: 'Nav' }
);

export const Nav = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          <strong>daysman</strong>
        </Typography>
        <FlexSpacer />
        <ul className={classes.ul}>
          {links.map(l => (
            <li className={classes.li} key={l.name}>
              <DmButtonLink color="inherit" href={l.href}>
                {l.name}
              </DmButtonLink>
            </li>
          ))}
        </ul>
      </Toolbar>
    </AppBar>
  );
};
