import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch, useSelector } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteFromCart } from '../../redux/actions';


const useStyles = makeStyles(theme => ({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

export default function CartDrawer({ isOpen, onClose }) {
  const classes = useStyles();

  const cartItems = useSelector(store => store.cart.items)
  const cartTotal = Math.floor(cartItems.reduce((pV, cV) => pV + cV.price, 0))
  const dispatch = useDispatch()

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    onClose(false)
  };

  const handleDelete = id => {
    dispatch(deleteFromCart(id))
  }

  return (
    <Drawer anchor='right' open={isOpen} onClose={toggleDrawer(false)}>
      <div
        className={classes.list}
        role="presentation"
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography>
            Cart Total - Rs. {cartTotal}
          </Typography>
        </div>
        <Divider />
        <List>
          {
            cartItems.map(item => (
              <ListItem key={item.id}>
                <ListItemAvatar>
                <Avatar variant="square"  alt={item.title} src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={'Rs. ' + item.price}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          }
        </List>
      </div>
    </Drawer>
  );
}
