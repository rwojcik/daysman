import React from 'react';
import { makeStyles, Paper, InputBase, Theme, Divider, IconButton, Tooltip } from '@material-ui/core';
import { FlexSpacer } from './common/FlexSpacer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles(
  ({ spacing }: Theme) => ({
    root: {
      marginTop: '10vh',
      marginBottom: '15vh',
    },
    inputPaper: {
      padding: spacing(1, 1),
      marginLeft: spacing(3),
      marginRight: spacing(3),
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
  { name: 'HomeTimer' }
);

export const HomeTimer: React.FC = React.memo(function HomeTimer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.inputPaper}>
        <div className={classes.inputRow}>
          <InputBase fullWidth className={classes.inputField} placeholder="What are you up to?" />
          <Tooltip title="Start timer">
            <IconButton>
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
      </Paper>
    </div>
  );
});
