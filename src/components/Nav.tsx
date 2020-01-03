import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, makeStyles, Theme } from '@material-ui/core';
import { DmButtonLink } from './common/DmButtonLink';
import { FlexSpacer } from './common/FlexSpacer';
import Mustache from '../assets/mustache-vector.svg';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Timer', href: '/timer' },
  { name: 'Projects', href: '/projects' },
  { name: 'Companies', href: '/companies' },
  { name: 'Reports', href: '/reports' },
  { name: 'User', href: '/user' },
];

const useStyles = makeStyles(
  ({ palette }: Theme) => ({
    title: {
      whiteSpace: 'nowrap',
    },
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
    activeLink: {
      color: palette.primary.light,
    },
    mustache: {
      '& path': {
        fill: 'currentColor',
      },
    },
    navButton: {
      textTransform: 'lowercase',
    },
  }),
  { name: 'Nav' }
);

export const Nav = React.memo(function Nav() {
  const classes = useStyles();
  return (
    <AppBar elevation={0} position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          <strong>day</strong>
          <span className={classes.mustache}>
            <Mustache />
          </span>
          <strong>man</strong>
        </Typography>
        <FlexSpacer />
        <ul className={classes.ul}>
          {links.map(l => (
            <li className={classes.li} key={l.name}>
              <DmButtonLink
                color="inherit"
                href={l.href}
                activeClassName={classes.activeLink}
                className={classes.navButton}
              >
                {l.name}
              </DmButtonLink>
            </li>
          ))}
        </ul>
      </Toolbar>
    </AppBar>
  );
});
