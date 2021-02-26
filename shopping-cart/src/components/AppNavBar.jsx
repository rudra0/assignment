import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartOutlined from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { Backdrop, Badge, CircularProgress, IconButton, LinearProgress } from '@material-ui/core';
import AppSearchbar from './AppSearchbar';
import AppProductsFilter from './AppProductsFilter';

export default function AppNavBar({onClickCart, onSearch}) {
  const classes = useStyles()
  const cartItems = useSelector(store => store.cart.items)
  const loading = useSelector(store => store.products.loading)

  return (
    <>
      <CssBaseline />
        <AppBar color="default" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="primary" className={classes.appTitle}>
              Alco
            </Typography>
            <AppSearchbar onSearch={onSearch} />
            <AppProductsFilter />
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={onClickCart}>
              <Badge badgeContent={cartItems.length} color="secondary">
                <AddShoppingCartOutlined style={{color: 'grey'}} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      <Toolbar style={{ marginBottom: 60 }}/>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  appbar: {
    boxShadow: "0 4px 12px 5px rgba(0,0,0,.05)",
    background: "#fff",
    alignItems: 'flex-start',
  },
  appTitle: {
    fontFamily: `'Bangers', cursive`,
    fontSize: 40
  },
  toolbar: {
    // minHeight: 128,
    minWidth: '60%',
    marginLeft: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      marginLeft: '0%',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))
