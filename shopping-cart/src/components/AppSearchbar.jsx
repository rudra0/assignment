import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, fade } from '@material-ui/core/styles';

function AppSearchbar(props) {
  const classes = useStyles()
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={e => props?.onSearch(e.target.value)}
      />
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    color: '#696e79',
    border: '1px solid #f5f5f6',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F4F5F5',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#9091A2"
  },
  inputRoot: {
    color: 'inherit',
    width: 300,
    [theme.breakpoints.down('sm')]: {
      width: 200,
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
}))


export default AppSearchbar;