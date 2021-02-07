import React from "react";
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/1200px-Facebook_Home_logo_old.svg.png"
          alt=""
        />
        <div className="header__input">
        <SearchIcon />
        <input type="text"/>
        </div>
      </div>

      

      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontSize='large' />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize='large'/>
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize='large' />
        </div>
        <div className="header__option">
          <PeopleOutlineIcon fontSize='large' /> 
        </div>
        <div className="header__option">
          <VideogameAssetIcon fontSize='large' />
        </div>
      </div>
        

      <div className="header__right">
        <div className="header__info">
          <PersonIcon fontSize='large' />
          <h4>PPPPPPPrayut</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ModeCommentIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveOutlinedIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
