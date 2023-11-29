import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
<div className='search'>
<input type='text' placeholder='Search...'/>
<SearchOutlinedIcon/>
</div>
<div className="items">
<div className="item">
<LanguageOutlinedIcon className='icon'/>
English
</div>
<div className="item">
  <DarkModeOutlinedIcon className='icon'/>
</div>
<div className="item">
  <FullscreenOutlinedIcon className='icon'/>
</div>
<div className="item">
  < NotificationsNoneOutlinedIcon className='icon'/>
  <div className='counter'>3</div>
</div>
<div className="item">
  <FormatListBulletedOutlinedIcon className='icon'/>
</div>
<div className="item">
  <ChatBubbleOutlineIcon className='icon'/>
  <div className='counter'>5</div>

</div>
<div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>


</div>
  </div>
    </div>
  )
}

export default Navbar 