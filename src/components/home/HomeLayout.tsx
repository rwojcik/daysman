import React from 'react';
import { Timer } from './timer/Timer';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import { HomeLinkList } from './HomeLinkList';
import { DmDivider } from '../common/DmDivider';

export const HomeLayout = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid container>
      <Grid item lg xs={12}>
        <Timer />
      </Grid>
      <Grid item lg={1} xs={12}>
        <DmDivider vertical={lgUp} />
      </Grid>
      <Grid item lg xs={12}>
        <HomeLinkList />
      </Grid>
    </Grid>
  );
};
