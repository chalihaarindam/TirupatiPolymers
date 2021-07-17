import './Header.css'
import logo from './logo1.png'
import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider.js";
import {auth} from './firebase';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, List, ListItem, ListItemText,ListItemIcon, IconButton,
  makeStyles,} from "@material-ui/core";



function Header() {
  
  const [{ basket, user }, dispatch] = useStateValue();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  const useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    paper: {
      background: "white"
    }
  });
  

  const classes = useStyles();

  return (
    <div className="header">
          <Link to="/" >
            <img
                className="header_logo"
                src={logo} alt="logo"
            />
            </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav" id="MenuItems">
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders' style={{ textDecoration: 'none' }}>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
      
      <div className="header_mobile">
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        
      
        <div className="hamburger">
         <MenuIcon onClick={() => setOpenDrawer(true)} style={{ color: 'white',fontSize: 40 }}/>
         </div>   
         <Drawer
               classes={{ paper: classes.paper }}
               anchor='right' 
               onClose={()=>setOpenDrawer(false)} 
               open={openDrawer}>
            <List>
                <ListItem>
                    <ListItemText> 
                            <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                                <div onClick={handleAuthenticaton} className="header_option">
                              <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                                    </div>
                              </Link>
                     </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText> 
                              <Link to='/orders' style={{ textDecoration: 'none' }}>
                               <div className="header_option">
                                  <span className="header_optionLineOne">Returns</span>
                                  <span className="header_optionLineTwo">& Orders</span>
                                </div>
                           </Link>
                     </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText> 
                                <div className="header_option">
                                  <span className="header_optionLineOne">Your</span>
                                  <span className="header_optionLineTwo">Prime</span>
                                </div>
                     </ListItemText>
                </ListItem>
            </List>
        </Drawer>
    </div>
    </div>
  );
}

export default Header;
