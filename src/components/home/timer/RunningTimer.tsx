import React, { useState } from 'react';
import { makeStyles, InputBase, Theme, Divider, IconButton, Tooltip, Typography } from '@material-ui/core';
import { FlexSpacer } from '../../common/FlexSpacer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import StopIcon from '@material-ui/icons/Stop';

import moment from 'moment';
import { Entry } from '../../../database/DaysmanDb';
import { TimerPaper } from './TimerPaper';
import clsx from 'clsx';

const useStyles = makeStyles(
  ({ spacing }: Theme) => ({
    paper: {
      minHeight: 121,
    },
    row: {
      display: 'flex',
      margin: spacing(1, 0),
      padding: spacing(0, 1.5),
    },
    header: {
      marginBottom: spacing(-1),
    },
  }),
  { name: 'RunningTimer' }
);

export type RunningTimerProps = {
  runningEntry: Entry;
};

export const RunningTimer: React.FC<RunningTimerProps> = React.memo(function RunningTimer({ runningEntry }) {
  const classes = useStyles();

  const [content, setContent] = useState(runningEntry.content || '');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const entry: Entry = { ...runningEntry, end: moment().unix(), content };

    console.log('submit', entry);
  };

  const handleContentChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  return (
    <TimerPaper>
      <form onSubmit={handleSubmit}>
        <Typography className={clsx(classes.row, classes.header)} color="textSecondary">
          Currently running:
        </Typography>
        <div className={classes.row}>
          <InputBase
            fullWidth
            placeholder="What are you up to?"
            onChange={handleContentChange}
            defaultValue={content}
          />
          <Tooltip title="Stop timer">
            <IconButton type="submit">
              <StopIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Divider />
        <div className={classes.row}>
          <FlexSpacer />
          <Tooltip title="Project">
            <IconButton>
              <FolderSpecialIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Keywords">
            <IconButton>
              <LoyaltyIcon />
            </IconButton>
          </Tooltip>
        </div>
      </form>
    </TimerPaper>
  );
});
