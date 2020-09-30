import React from 'react'
import logo from './logo.svg'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar } from '@material-ui/core'
import { IconButton } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import FacebookIcon from "@material-ui/icons/Facebook"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useStateValue } from "./StateProvider"
function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
            <img src="data:image/png;base64,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" className="App-logo" alt="logo" />
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search Facebook"></input>
            </div>
            </div>
            <div className="header__center">
                <div className="header__option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
