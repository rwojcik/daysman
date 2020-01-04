import React, { useState } from 'react';
import { makeStyles, InputBase, Theme, Divider, IconButton, Tooltip } from '@material-ui/core';
import { FlexSpacer } from '../../common/FlexSpacer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import moment from 'moment';
import { globalStore } from '../../../store/model';
import { TimerPaper } from './TimerPaper';

const useStyles = makeStyles(
  ({ spacing }: Theme) => ({
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
  { name: 'TimerNewEntry' }
);

export const TimerNewEntry: React.FC = React.memo(function TimerNewEntry() {
  const classes = useStyles();

  const fetchEntries = globalStore.useStoreActions((actions) => actions.entries.fetchEntries);

  const [content, setContent] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const entry = { start: moment().unix(), content };

    console.log('submit', entry);
  };

  const handleContentChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  return (
    <TimerPaper>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputRow}>
          <InputBase
            fullWidth
            className={classes.inputField}
            placeholder="What are you up to?"
            onChange={handleContentChange}
          />
          <Tooltip title="Start timer">
            <IconButton type="submit">
              <PlayCircleFilledIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Divider />
        <div className={classes.inputButtons}>
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
