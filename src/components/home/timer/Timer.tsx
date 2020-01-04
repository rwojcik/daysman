import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { globalStore } from '../../../store/model';
import { TimerPaper } from './TimerPaper';
import { TimerNewEntry } from './TimerNewEntry';
import { RunningTimer } from './RunningTimer';

const useStyles = makeStyles(
  ({ spacing }: Theme) => ({
    paper: {
      minHeight: 121,
    },
    inputRow: {
      display: 'flex',
      marginBottom: spacing(0.5),
    },
    inputField: {
      padding: spacing(1, 1.5),
    },
    inputButtons: {
      marginTop: spacing(0.5),
      display: 'flex',
    },
  }),
  { name: 'Timer' }
);

export const Timer: React.FC = React.memo(function Timer() {
  const classes = useStyles();

  const lastRunningEntry = globalStore.useStoreState((state) => state.entries.lastRunningEntry);
  const fetching = globalStore.useStoreState((state) => state.entries.fetching);
  const fetchEntries = globalStore.useStoreActions((actions) => actions.entries.fetchEntries);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  if (fetching) {
    return <TimerPaper className={classes.paper} />;
  }

  if (lastRunningEntry == null) {
    return <TimerNewEntry />;
  }

  return <RunningTimer runningEntry={lastRunningEntry} key={lastRunningEntry.id || -1} />;
});
